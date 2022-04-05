<template>
    <main>
    <ProfileCard 
    :job-title ="member.jobTitle"
        :verbatim  ="member.verbatim"
        :stack = "member.stack"
        :profile-pic="member.profilePic"
        :last-name = "member.lastName"
        :first-name = "member.firstName"
        :cardColor="member.color"
    />
    </main>
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue'
import { teams } from '@/assets/static/js/appTeams'

export default ({
    name : 'TeamMember',
    components: {
        ProfileCard,

    },
    data:()=>({
        teams,
        member:{

        }

    }),
    created(){
        const {memberId} = this.$route.params
        this.member=this.teams[memberId]
    }
})
</script>

<style scoped>

</style>
