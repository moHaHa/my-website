<template>
    <v-app id="app" class="rich-black app-mohammad-webite">
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


