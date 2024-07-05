<template>
    <footer class="container-fluid footer">
        <div class="row justify-content-center">
            <p class="bottom text-white">Nizaam's portfolio &copy; <span class="shadow">{{ currentYear }}</span></p>
        </div>
    </footer>
</template>

<script>
export default {
     name: "FooterComp",
     data(){
        return {
            currentYear: new Date().getUTCFullYear()
         }
       },
}
</script>

<style scoped>
.footer {
    background-color: black;
    margin-top: 60px;
}

.bottom {
margin-top: 10px;
    font-size: 21px;
    text-align: center
}

.text-dark {
    color: white;
}

.shadow {
    text-shadow: 1px 1px 2px #aaa;
}
</style>
