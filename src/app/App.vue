<template>
    <v-app class="rich-black">
        <router-view>
    </router-view>
    </v-app>
</template>
<script>
export default {
        created(){
         this.$vuetify.theme.dark = true
        }
}
</script>

<style>

</style>


