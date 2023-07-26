/*eslint-disable */
const functions = require("firebase-functions");
const admin = require('firebase-admin');
const Joi = require('joi');
const axios = require('axios')

admin.initializeApp()

const cors = require('cors')({
    origin: true,
});

// const parsedData = require('./feed.json')
// let poxDat;
// poxDat = parsedData.champs;
// const poxData = poxDat.concat(parsedData.equips).concat(parsedData.spells).concat(parsedData.relics)


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


exports.submitData = functions.https.onCall(async (data, context) => {
    try {
        const thisData = data;

        if (thisData.deck) {

            const {data} = await axios.get('https://www.poxnora.com/api/feed.do?t=json')
            let poxDat = data.champs
            const poxData = poxDat.concat(data.equips).concat(data.spells).concat(data.relics)

            const schema = Joi.object({
                name: Joi.string().min(3).max(30).required(),
                username: Joi.string().min(3).max(20).required(),
                facOne: Joi.string().min(5).max(30).required(),
                facTwo: Joi.string().allow(null).min(5).max(30),
                published: Joi.boolean().required(),
                deck: Joi.array().required(),
                views: Joi.number().required()
            })
            thisData.views = 0;
            // Validate data
            const validated = await schema.validateAsync(thisData);

            let counter = 0

            validated.deck.forEach(rune => {
                const type = rune.type;
                delete rune.type
                const found = poxData.some(el => JSON.stringify(el) === JSON.stringify(rune))

                if (found) {
                    counter = counter + 1;
                    rune.type = type;
                }
            })

            if (counter == 30) { // successful
                const writeResult = await admin.firestore().collection('decks').add(validated)

                return {
                    success: true,
                    id: writeResult.id
                }

            } else {
                return {
                    success: false,
                    message: 'The data you are trying to publish is not valid'
                }
            }

        } else {
            return {
                success: false,
                message: 'Deck does not exist'
            }
        }
    } catch(err) {
        return {
            success: false,
            message: err.message
        }
    }

})

exports.getRunes = functions.https.onRequest(async (req, res) => {
    try {
        cors(req, res, async () => {
            res.set('Cache-Control', 'public, max-age=14400, s-maxage=18000');

            const {data} = await axios.get('https://www.poxnora.com/api/feed.do?t=json')

            // const {data} = await axios.get('https://www.poxnora.com/api/feed.do?t=json')
            res.status(200).send({
                success: true,
                data
            })

            // return {
            //     success: true,
            //     data
            // }
        })

    } catch (err) {
        cors(req, res, () => {
            res.status(500).send({
                success: false,
                message: err.message
            })
        })
    }
})

exports.getAbilities = functions.https.onCall(async (req, res) => {
    try {
        const {data} = await axios.get('https://www.poxnora.com/api/abilities')

        return {
            success: true,
            data: data.abilities
        }

    } catch(err) {
        return {
            success: false,
            message: err.message
        }
    }
})

exports.getNonAbilities = functions.https.onCall(async (req, res) => {
    try {
        let {data} = await axios.get('https://www.poxnora.com/api/abilities')
        const abilities = data;

        let response = await axios.get('https://www.poxnora.com/api/feed.do?t=json')
        const runes = response.data;


        const usedAbilities = []

        runes.champs.forEach(champ => {
            champ.startingAbilities.forEach(ability => {
                const found = abilities.abilities.some(el => el.name === ability.name)
                const duplicate = usedAbilities.some(el => el.name === ability.name)
                if (found && !duplicate) {
                    usedAbilities.push(ability)
                }
            })

            champ.abilitySets.forEach(i => {
                i.abilities.forEach(ability => {
                    const found = abilities.abilities.some(el => el.name === ability.name)
                    const duplicate = usedAbilities.some(el => el.name === ability.name)
                    if (found && !duplicate) {
                        usedAbilities.push(ability)
                    }
                })
            })
        })

        const nonExist = []

        abilities.abilities.forEach(ability => {
            const found = usedAbilities.some(el => el.name == ability.name)
            const duplicate = nonExist?.some(el => el.name == ability.name)
            if (!found && !duplicate) {
                nonExist.push(ability)
            }
        })

        return {
            success: true,
            data: nonExist
        }



    } catch (err) {
        return {
            success: false,
            message: err.message
        }
    }
})

exports.getConditions = functions.https.onCall(async (req, res) => {
    try {
        let response = await axios.get('https://www.poxnora.com/api/feed.do?t=json&r=conditions')
        const conditions = response.data

        const sorted = conditions.conditions.sort((a, b) => a.name.localeCompare(b.name))

        return {
            success: true,
            data: sorted
        }


    } catch(err) {
        return {
            success: false,
            message: err.message
        }
    }
})

exports.getChampionAbilities = functions.https.onRequest(async (req, res) => {
    try {
        cors(req, res, async () => {
            res.set('Cache-Control', 'public, max-age=14400, s-maxage=18000');

            let response = await axios.get('https://www.poxnora.com/api/feed.do?t=json')
            const runes = response.data;

            const usedAbilities = []

            runes.champs.forEach(champ => {
                champ.startingAbilities.forEach(ability => {
                    const found = usedAbilities.find(abil => ability.name == abil.name)
                    if (!found) usedAbilities.push(ability)
                })

                champ.abilitySets.forEach(i => {
                    i.abilities.forEach(ability => {
                        const found = usedAbilities.find(abil => ability.name == abil.name)
                        if (!found) usedAbilities.push(ability)
                    })
                })
            })

            const sorted = usedAbilities.sort((a, b) => a.name.localeCompare(b.name))

            res.status(200).send({
                success: true,
                data: sorted
            })
        })


    } catch (err) {
        cors(req, res, () => {
            res.status(500).send({
                success: false,
                message: err.message
            })
        })
    }
})
