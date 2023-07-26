<template>
    <div class="rune-container">
        <div class="rune-preview">
            <div class="rune-front">
                <img class="rune-front-frame" :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/front/${factionOne}.gif`" alt="">
                <img class="rune-front-image" :src="`https://d2aao99y1mip6n.cloudfront.net/images/runes/lg/${rune.hash}.jpg`" alt="test">
                <img class="rune-font-rarity" :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/lg_frame_rarity_${rune.rarity == 'UNCOMMON' && 'uncom' || rune.rarity == 'EXOTIC' && 'exotic' || rune.rarity == 'COMMON' && 'com' || rune.rarity == 'LEGENDARY' && 'pe' || rune.rarity == 'RARE' && 'rare' || rune.rarity == 'LIMITED' && 'le'}.gif`" alt="">
                <div class="upper-rune">
                    <div class="rune-front-faction">
                        <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_${factionOne}_1.png`" alt="" class="rune-faction-icon-1">
                        <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_${factionTwo}_2.png`" alt="" class="rune-faction-icon-2">
                    </div>
                    <span class="rune-front-name shadow">{{rune.name}}</span>
                    <div class="rune-front-cost">
                        <span class="rune-cost shadow">{{rune.noraCost}}</span>
                        <span class="tooltip"></span>
                    </div>
                    <div class="rune-front-stats">
                        <div class="rune-stats-dmg">
                            <span class="rune-stat">{{rune.damage}}</span>
                        </div>
                        <div class="rune-stats-spd">
                            <span class="rune-stat">{{rune.speed}}</span>
                        </div>
                        <div class="rune-stats-rng">
                            <span class="rune-stat">{{rune.maxRng > 1 ? rune.minRng + '-' + rune.maxRng : rune.minRng}}</span>
                        </div>
                        <div class="rune-stats-def">
                            <span class="rune-stat">{{rune.defense}}</span>
                        </div>
                        <div class="rune-stats-hp">
                            <span class="rune-stat">{{rune.hitPoints}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rune-back" :style="`background: transparent url('https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/back/${factionOne}.gif') no-repeat right top`">
                <div class="rune-back-faction">

                </div>
                <span class="rune-back-name shadow">Champion</span>
                <div class="rune-back-flavor">{{rune.description}}</div>
                <!--        ABILITIES LIST HERE        -->
                <div class="rune-back-abilities">
                    <div class="rune-back-abilities-col-1">
                        <template v-for="(item, index) in rune.abilitySets">
                            <template v-for="(ability) in rune.abilitySets[index].abilities">
                                <v-popover :key="ability.name" v-if="ability.default" trigger="hover" class="popover-2">
                                  <v-popover class="popover-2">
                                    <div class="rune-back-ability rune-ability-slot tooltip-target">
                                        <div class="rune-back-ability-icon" :style="`background: transparent url('https://d2aao99y1mip6n.cloudfront.net/images/ability_icons/small/icon_${ability.iconName}.gif') no-repeat center center`"></div>
                                        <div class="rune-back-ability-info-container">
                                            <div style="display: table-cell; vertical-align: middle;"><span class="rune-back-ability-info">{{ability.name}} {{ability.level > 0 ? '(' + ability.level + ')' : ''}}</span></div>
                                        </div>
                                    </div>

                                    <template slot="popover">
                                      <p class="text-sm mb-2">Select an ability</p>
                                      <template v-for="upgrade in rune.abilitySets[index].abilities">
                                        <v-popover :key="upgrade.id" trigger="hover" class="popover-2">
                                          <div class="flex flex-row mb-1 cursor-default">
                                            <div class="rune-back-ability-icon mr-2" :style="`background: transparent url('https://d2aao99y1mip6n.cloudfront.net/images/ability_icons/small/icon_${ability.iconName}.gif') no-repeat center center`"></div>
                                            <div>
                                              <p class="text-yellow-400 text-sm">{{upgrade.name}} {{ability.level > 0 ? '(' + ability.level + ')' : ''}}</p>
                                              <p class="text-xs">Adds {{ability.noraCost - upgrade.noraCost }} nora</p>
                                            </div>
                                          </div>
                                          <template slot="popover">
                                            <p class="font-bold text-lg"><span>{{upgrade.name}}</span></p>
                                            <p class="text-sm text-blue-400"><span>Cooldown: {{upgrade.cooldown}}</span></p>
                                            <p class="text-sm text-blue-400"><span>AP Cost: {{upgrade.apCost}}</span></p>
                                            <p class="text-xs"><span>{{upgrade.shortDescription}}</span></p>
                                          </template>
                                        </v-popover>
                                      </template>
                                    </template>

                                  </v-popover>
                                  <template slot="popover">
                                    <p class="font-bold text-lg"><span>{{ability.name}}</span></p>
                                    <p class="text-sm text-blue-400"><span>Cooldown: {{ability.cooldown}}</span></p>
                                    <p class="text-sm text-blue-400"><span>AP Cost: {{ability.apCost}}</span></p>
                                    <p class="text-xs"><span>{{ability.shortDescription}}</span></p>
                                  </template>
                                </v-popover>

                            </template>
                        </template>
                        <template v-for="(ability, index) in rune.startingAbilities">
                            <v-popover :key="index" v-if="index < 2" trigger="hover" class="popover-2">
                              <div class="rune-back-ability rune-ability-slot">
                                <div class="rune-back-ability-icon" :style="`background: transparent url('https://d2aao99y1mip6n.cloudfront.net/images/ability_icons/small/icon_${ability.iconName}.gif') no-repeat center center`"></div>
                                <div class="rune-back-ability-info-container">
                                  <div style="display: table-cell; vertical-align: middle;"><span class="rune-back-ability-info">{{ability.name}} {{ability.level > 0 ? '(' + ability.level + ')' : ''}}</span></div>
                                </div>
                              </div>

                              <template slot="popover">
                                <p class="font-bold text-lg"><span>{{ability.name}}</span></p>
                                <p class="text-sm text-blue-400"><span>Cooldown: {{ability.cooldown}}</span></p>
                                <p class="text-sm text-blue-400"><span>AP Cost: {{ability.apCost}}</span></p>
                                <p class="text-xs"><span>{{ability.shortDescription}}</span></p>
                              </template>
                            </v-popover>
                        </template>
                    </div>
                    <div class="rune-back-abilities-col-2">
                        <template v-for="(ability, index) in rune.startingAbilities">
                            <v-popover :key="index" v-if="index >= 2" trigger="hover" class="popover-2">
                                <div class="rune-back-ability rune-ability-slot">
                                    <div class="rune-back-ability-icon" :style="`background: transparent url('https://d2aao99y1mip6n.cloudfront.net/images/ability_icons/small/icon_${ability.iconName}.gif') no-repeat center center`"></div>
                                    <div class="rune-back-ability-info-container">
                                        <div style="display: table-cell; vertical-align: middle;"><span class="rune-back-ability-info">{{ability.name}} {{ability.level > 0 ? '(' + ability.level + ')' : ''}}</span></div>
                                    </div>
                                </div>
                                <template slot="popover">
                                    <p class="font-bold text-lg"><span>{{ability.name}}</span></p>
                                    <p class="text-sm text-blue-400"><span>Cooldown: {{ability.cooldown}}</span></p>
                                    <p class="text-sm text-blue-400"><span>AP Cost: {{ability.apCost}}</span></p>
                                    <p class="text-xs"><span>{{ability.shortDescription}}</span></p>
                                </template>
                            </v-popover>
                        </template>
                    </div>
                </div>
                <div class="rune-back-attributes">
                    <div>
                        Deck Limit: <span class="rune-back-attribute-value">{{rune.deckLimit}}</span>
                    </div>
                    <div>
                        Races: <span class="rune-back-attribute-value">{{rune.races.join(', ')}}</span>
                    </div>
                    <div>
                        Classes: <span class="rune-back-attribute-value">{{rune.classes.join(', ')}}</span>
                    </div>
                    <div>
                        Size: <span class="rune-back-attribute-value">{{rune.size}}</span>
                    </div>
                </div>
                <div class="rune-back-idol">
                    <div style="position: absolute; bottom: 0; width: 100%">
                        <img :src="`https://d2aao99y1mip6n.cloudfront.net/images/runes/idols/${rune.hash}.gif`" :alt="rune.name" class="rune-idol">
                    </div>
                </div>
                <div class="rune-set"></div>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "RuneLarge",
        props: ['rune'],
        data() {
            return {
                factionOne: '',
                factionTwo: ''
            }
        },
        mounted() {

            switch(this.rune.factions[0]) {
                case 'Forsaken Wastes':
                    this.factionOne = '1'
                    break;
                case 'Forglar Swamp':
                    this.factionOne = '6'
                    break;
                case 'Underdepths':
                    this.factionOne = '4'
                    break;
                case 'Savage Tundra':
                    this.factionOne = '7'
                    break;
                case 'Shattered Peaks':
                    this.factionOne = '8'
                    break;
                case 'Ironfirst Stronghold':
                    this.factionOne = '3'
                    break;
                case 'Sundered Lands':
                    this.factionOne = '2'
                    break;
                case "K'thir Forest":
                    this.factionOne = '5'
                    break;
            }

            if (this.rune.factions.length > 1) {
                switch(this.rune.factions[1]) {
                    case 'Forsaken Wastes':
                        this.factionTwo = '2'
                        break;
                    case 'Forglar Swamp':
                        this.factionTwo = '6'
                        break;
                    case 'Underdepths':
                        this.factionTwo = '4'
                        break;
                    case 'Savage Tundra':
                        this.factionTwo = '7'
                        break;
                    case 'Shattered Peaks':
                        this.factionTwo = '8'
                        break;
                    case 'Ironfirst Stronghold':
                        this.factionTwo = '3'
                        break;
                    case 'Sundered Lands':
                        this.factionTwo = '2'
                        break;
                    case "K'thir Forest":
                        this.factionTwo = '5'
                        break;
                }
            } else {
                this.factionTwo = this.factionOne
            }
        }
    }
</script>

<style scoped>
    .popover-inner, .tooltip {
        background-color: rgba(70, 20, 27, 0.65);
        padding: 4px;
    }

    .rune-front {
        position: absolute;
        width: 332px;
        height: 424px;
        top: 0;
        left: 0;
    }

    .rune-front-frame {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
    }

    .rune-front-image {
        position: absolute;
        top: 47px;
        left: 31px;
        width: 270px;
        height: 310px;
        z-index: 1;
    }

    .rune-font-rarity {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }

    .rune-preview {
        position: relative;
        width: 664px;
        height: 428px;
    }

    .rune-front-faction {
        position: absolute;
        width: 30px;
        height: 22px;
        top: 34px;
        left: 40px;
        z-index: 4;
    }

    .rune-faction-icon-2 {
        position: absolute;
        right: 0;
    }

    .rune-faction-icon-1 {
        position: absolute;
        left: 0;
    }

    .rune-front-name {
        position: absolute;
        width: 240px;
        top: 36px;
        left: 45px;
        text-align: center;
        font: bold 17px arial,sans-serif;
        color: #ffffff;
        z-index: 4;
    }

    .shadow {
        text-shadow: 1px 2px 1px #000000;
    }

    .rune-front-cost {
        position: absolute;
        width: 42px;
        height: 42px;
        top: 21px;
        left: 272px;
        text-align: center;
        z-index: 4;
    }

    .upper-rune {
        z-index: 4;
    }

    span.rune-cost {
        padding-top: 10px;
        display: block;
        font: bold 20px arial,sans-serif;
        color: #ffffff;
        line-height: 20px;
    }

    .rune-front-stats {
        position: absolute;
        bottom: 29px;
        left: 0;
        width: 332px;
        height: 50px;
        background: transparent url(../assets/runes/rune_stats.png) no-repeat right top;
        z-index: 4;
    }

    span.rune-stat {
        font: normal 12px arial,sans-serif;
        color: #ffffff;
        line-height: 12px;
        padding-top: 38px;
        display: block;
    }

    .rune-stats-dmg {
        position: absolute;
        width: 46px;
        height: 50px;
        text-align: center;
        bottom: 0;
        left: 40px;
    }

    .rune-stats-spd {
        position: absolute;
        width: 46px;
        height: 50px;
        text-align: center;
        bottom: 0;
        left: 91px;
    }

    .rune-stats-rng {
        position: absolute;
        width: 46px;
        height: 50px;
        text-align: center;
        bottom: 0;
        left: 142px;
    }

    .rune-stats-def {
        position: absolute;
        width: 46px;
        height: 50px;
        text-align: center;
        bottom: 0;
        left: 193px;
    }

    .rune-stats-hp {
        position: absolute;
        width: 46px;
        height: 50px;
        text-align: center;
        bottom: 0;
        left: 244px;
    }

    .rune-back-faction {
        position: absolute;
        width: 30px;
        height: 22px;
        top: 34px;
        left: 40px;
    }

    .rune-back-name {
        position: absolute;
        width: 240px;
        top: 36px;
        left: 45px;
        text-align: center;
        font: bold 17px arial,sans-serif;
        color: #ffffff;
    }

    .rune-back-flavor {
        position: absolute;
        width: 262px;
        height: 67px;
        top: 62px;
        left: 33px;
        text-align: center;
        font: 10px arial,sans-serif;
        line-height: 11px;
        color: #ffffff;
        overflow: hidden;
    }

    img.rune-idol {
        display: block;
        margin: 0 auto;
    }

    .rune-back-idol {
        position: absolute;
        bottom: 31px;
        right: 30px;
        width: 160px;
        height: 120px;
    }

    .rune-back-attributes {
        position: absolute;
        width: 100px;
        top: 295px;
        left: 45px;
        font: 12px arial,sans-serif;
        color: #ffffff;
        line-height: 12px;
    }

    .rune-back-attribute-value {
        color: #9fbe52;
    }

    .rune-back-abilities {
        position: absolute;
        width: 270px;
        height: 144px;
        top: 130px;
        left: 30px;
    }

    .rune-back {
        position: absolute;
        width: 332px;
        height: 424px;
        top: 0;
        left: 332px;
    }
    .rune-back-abilities-col-1 {
        width: 129px;
        float: left;
        margin-left: 6px;
    }

    .rune-back-ability {
        position: relative;
        width: 124px;
        height: 30px;
        margin: 4px 0;
        cursor: pointer;
    }

    .rune-back-ability-icon {
        width: 30px;
        height: 30px;
        vertical-align: middle;
        float: left;
    }

    .rune-back-ability-info-container {
        margin-left: 5px;
        display: table;
        height: 28px;
        float: left;
        width: 89px;
        overflow: hidden;
    }

    span.rune-back-ability-info {
        font: normal 10px arial,sans-serif;
        color: #ffffff;
        line-height: 10px;
        display: block;
    }

    .rune-back-abilities-col-2 {
        width: 129px;
        float: left;
        margin-left: 6px;
    }

    .ability-upgrade {
      position: relative;
    }
    .ability-upgrade {
      padding: 5px 0 5px 10px;
      width: 200px;
      height: 30px;
    }

    /*.rune-container {*/
    /*    position: relative;*/
    /*    width: 664px;*/
    /*    height: 428px;*/
    /*    margin: 0 auto;*/
    /*}*/
</style>