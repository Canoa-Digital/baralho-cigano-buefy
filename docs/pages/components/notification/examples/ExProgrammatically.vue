<template>
    <section>
        <div class="buttons">
            <button class="button is-medium" @click="simple">
                Launch notification (default)
            </button>

            <button class="button is-medium is-success" @click="success">
                Launch notification (custom)
            </button>

            <button class="button is-medium is-danger" @click="danger">
                Launch notification (custom)
            </button>
        </div>
    </section>
</template>

<script>
    export default {
        methods: {
            simple() {
                this.$buefy.notification.open('Something happened')
            },
            success() {
                this.$buefy.notification.open({
                    message: 'Something happened correctly!',
                    type: 'is-success'
                })
            },
            danger() {
                const notif = this.$buefy.notification.open({
                    duration: 5000,
                    message: `Something's not good, also I'm on bottom`,
                    position: 'is-bottom-right',
                    type: 'is-danger',
                    hasIcon: true
                })
                notif.$on('close', () => {
                    this.$buefy.notification.open('Custom notification closed!')
                })
            }
        }
    }
</script>
