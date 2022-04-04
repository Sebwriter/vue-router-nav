<template>
    <main>
        <div class="wrapper">
            <h1>Our Team</h1>
            <div class="team">
                <router-link :to="{ name: 'Efrim' }">
                    <div class="team_member">
                        <div class="team_img">
                            <img src="@/assets/static/img/profile01_round.png" alt="Team_image">
                        </div>
                        <h3>Efrim</h3>
                        <p class="role">Full Stack 🚀</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas
                            facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
                    </div>
                </router-link>
                <router-link :to="{ name: 'Elena' }">
                <div class="team_member">
                    <div class="team_img">
                        <img src="@/assets/static/img/profile02_round.png" alt="Team_image">
                    </div>
                    <h3>Elena</h3>
                    <p class="role">Creative Guru</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas
                        facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
                </div>
                </router-link>
                <router-link :to="{ name: 'Alan' }">
                <div class="team_member">
                    <div class="team_img">
                        <img src="@/assets/static/img/profile03_round.png" alt="Team_image">
                    </div>
                    <h3>Alan</h3>
                    <p class="role">Techno-Mage</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat tempora, voluptatum quas
                        facere dolorum aut cumque nihil nulla harum nemo distinctio quam blanditiis dignissimos.</p>
                </div>
                </router-link>
            </div>
        </div>
    </main>
</template>