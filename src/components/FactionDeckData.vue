<template>
    <div>
        <div>
            <div class="rune-front-faction flex flex-row items-center justify-center">
                <div class="flex flex-col justify-center items-center ml-1 mr-1" v-if="fw">
                    <div class="flex flex-row">
                        <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_1_1.png`" alt="">
                        <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_1_2.png`" alt="" style="margin-left: -30px">
                    </div>
                    <p class="dark:text-zinc-300">{{fw}}</p>
                </div>
                <div class="flex flex-col justify-center items-center ml-1 mr-1" v-if="sl">
                    <div class="flex flex-row">
                        <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_2_1.png`" alt="">
                        <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_2_2.png`" alt="" style="margin-left: -30px">
                    </div>
                    <p class="dark:text-zinc-300">{{sl}}</p>
                </div>
                <div class="flex flex-col justify-center items-center ml-1 mr-1" v-if="is">
                    <div class="flex flex-row">
                        <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_3_1.png`" alt="">
                        <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_3_2.png`" alt="" style="margin-left: -30px">
                    </div>
                    <p class="dark:text-zinc-300">{{is}}</p>
                </div>
                <div class="flex flex-col justify-center items-center ml-1 mr-1" v-if="ud">
                    <div class="flex flex-row">
                        <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_4_1.png`" alt="">
                        <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_4_2.png`" alt="" style="margin-left: -30px">
                    </div>
                    <p class="dark:text-zinc-300">{{ud}}</p>
                </div>
                <div class="flex flex-col justify-center items-center ml-1 mr-1" v-if="kf">
                    <div class="flex flex-row">
                        <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_5_1.png`" alt="">
                        <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_5_2.png`" alt="" style="margin-left: -30px">
                    </div>
                    <p class="dark:text-zinc-300">{{kf}}</p>
                </div>
                <div class="flex flex-col justify-center items-center ml-1 mr-1" v-if="fs">
                    <div class="flex flex-row">
                        <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_6_1.png`" alt="">
                        <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_6_2.png`" alt="" style="margin-left: -30px">
                    </div>
                    <p class="dark:text-zinc-300">{{fs}}</p>
                </div>
                <div class="flex flex-col justify-center items-center ml-1 mr-1" v-if="st">
                    <div class="flex flex-row">
                        <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_7_1.png`" alt="">
                        <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_7_2.png`" alt="" style="margin-left: -30px">
                    </div>
                    <p class="dark:text-zinc-300">{{st}}</p>
                </div>
                <div class="flex flex-col justify-center items-center ml-1 mr-1" v-if="sp">
                    <div class="flex flex-row">
                        <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_8_1.png`" alt="">
                        <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_8_2.png`" alt="" style="margin-left: -30px">
                    </div>
                    <p class="dark:text-zinc-300">{{sp}}</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FactionDeckData",
    props: ['deck'],
    data() {
        return {
            fw: 0,
            sp: 0,
            sl: 0,
            kf: 0,
            ud: 0,
            is: 0,
            st: 0,
            fs: 0,
        }
    },
    mounted() {
        this.deck.forEach(rune => {
            if (rune) {
                if (rune.factions.includes('Forsaken Wastes')) {
                    this.fw = this.fw + 1
                } else if (rune.factions.includes('Sundered Lands')) {
                    this.sl = this.sl + 1
                } else if (rune.factions.includes('Ironfist Stronghold')) {
                    this.is = this.is + 1
                } else if (rune.factions.includes('Underdepths')) {
                    this.ud = this.ud + 1
                } else if (rune.factions.includes("K'thir Forest")) {
                    this.kf = this.kf + 1
                } else if (rune.factions.includes('Forglar Swamp')) {
                    this.fs = this.fs + 1
                } else if (rune.factions.includes('Savage Tundra')) {
                    this.st = this.st + 1
                } else if (rune.factions.includes('Shattered Peaks')) {
                    this.sp = this.sp + 1
                }
            }
        })
    },
}
</script>

<style scoped>

</style>