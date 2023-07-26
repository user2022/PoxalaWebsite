<template>
    <div>
        <div class="rune-front-faction flex flex-row items-center justify-center">
            <div class="flex flex-col justify-center items-center ml-1 mr-1" v-if="$store.state.factionCount.filter(x => x == 'Forsaken Wastes').length > 0">
                <div class="flex flex-row">
                    <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_1_1.png`" alt="" style="height: 18px">
                    <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_1_2.png`" alt="" style="margin-left: -25px; height: 18px">
                </div>
                <p class="text-sm">{{$store.state.factionCount.filter(x => x == 'Forsaken Wastes').length}}</p>
            </div>
            <div class="flex flex-col justify-center items-center ml-1 mr-1" v-if="$store.state.factionCount.filter(x => x == 'Sundered Lands').length > 0">
                <div class="flex flex-row">
                    <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_2_1.png`" alt="" style="height: 18px">
                    <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_2_2.png`" alt="" style="margin-left: -25px; height: 18px">
                </div>
                <p class="text-sm">{{$store.state.factionCount.filter(x => x == 'Sundered Lands').length}}</p>
            </div>
            <div class="flex flex-col justify-center items-center ml-1 mr-1" v-if="$store.state.factionCount.filter(x => x == 'Ironfist Stronghold').length > 0">
                <div class="flex flex-row">
                    <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_3_1.png`" alt="" style="height: 18px">
                    <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_3_2.png`" alt="" style="margin-left: -25px; height: 18px">
                </div>
                <p class="text-sm">{{$store.state.factionCount.filter(x => x == 'Ironfist Stronghold').length}}</p>
            </div>
            <div class="flex flex-col justify-center items-center ml-1 mr-1" v-if="$store.state.factionCount.filter(x => x == 'Underdepths').length > 0">
                <div class="flex flex-row">
                    <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_4_1.png`" alt="" style="height: 18px">
                    <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_4_2.png`" alt="" style="margin-left: -25px; height: 18px">
                </div>
                <p class="text-sm">{{$store.state.factionCount.filter(x => x == 'Underdepths').length}}</p>
            </div>
            <div class="flex flex-col justify-center items-center ml-1 mr-1" v-if="$store.state.factionCount.filter(x => x == `K'thir Forest`).length > 0">
                <div class="flex flex-row">
                    <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_5_1.png`" alt="" style="height: 18px">
                    <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_5_2.png`" alt="" style="margin-left: -25px; height: 18px">
                </div>
                <p class="text-sm">{{$store.state.factionCount.filter(x => x == `K'thir Forest`).length}}</p>
            </div>
            <div class="flex flex-col justify-center items-center ml-1 mr-1" v-if="$store.state.factionCount.filter(x => x == 'Forglar Swamp').length > 0">
                <div class="flex flex-row">
                    <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_6_1.png`" alt="" style="height: 18px">
                    <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_6_2.png`" alt="" style="margin-left: -25px; height: 18px">
                </div>
                <p class="text-sm">{{$store.state.factionCount.filter(x => x == 'Forglar Swamp').length}}</p>
            </div>
            <div class="flex flex-col justify-center items-center ml-1 mr-1" v-if="$store.state.factionCount.filter(x => x == 'Savage Tundra').length > 0">
                <div class="flex flex-row">
                    <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_7_1.png`" alt="" style="height: 18px">
                    <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_7_2.png`" alt="" style="margin-left: -25px; height: 18px">
                </div>
                <p class="text-sm">{{$store.state.factionCount.filter(x => x == 'Savage Tundra').length}}</p>
            </div>
            <div class="flex flex-col justify-center items-center ml-1 mr-1" v-if="$store.state.factionCount.filter(x => x == 'Shattered Peaks').length > 0">
                <div class="flex flex-row">
                    <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_8_1.png`" alt="" style="height: 18px">
                    <img :src="`https://d2aao99y1mip6n.cloudfront.net/_themes/global/frames/large/faction_8_2.png`" alt="" style="margin-left: -25px; height: 18px">
                </div>
                <p class="text-sm">{{$store.state.factionCount.filter(x => x == 'Shattered Peaks').length}}</p>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "DeckHolderFactionCount"
}
</script>

<style scoped>

</style>