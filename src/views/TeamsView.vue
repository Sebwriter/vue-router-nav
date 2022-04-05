<template>
    <main>
        <div class="wrapper">
            <h1>Our Team</h1>
            <div class="team">
                <div
                    class="team_member"
                    @click="goToMemberCard(idx)"
                    @mouseover="pointer()"
                    @mouseout="defaultCursor()"
                    v-for="(members, idx) in teams"
                    :key="idx"
                >
                    <div class="team_img">
                        <img
                            :src="require('../assets/static/img/' + members.profilePicRound)"
                            alt="Team_image"
                        />
                    </div>
                    <h3>{{ members.firstName }}</h3>
                    <p class="role">{{ members.jobTitle }}</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas
                        facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>

<script scoped>
import { teams } from '@/assets/static/js/appTeams.js'

export default {
    name: 'TeamsView',
    data: () => ({
        teams
    }),
    methods: {
        goToMemberCard(memberId) {
            this.$router.push({ name: 'member', params: { memberId } })

        },
        pointer(){
            document.querySelector('.team_member').style.cursor='pointer'
        }
    }

}


</script>


<style scoped>
@import "@/assets/static/css/team.css";
</style>