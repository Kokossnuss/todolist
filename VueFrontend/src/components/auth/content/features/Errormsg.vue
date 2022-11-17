<script setup lang="ts">
    import { _Auth } from '../../Authstore';
</script>

<template>
    <div class="errcont">
        <p class="errmsg">
            {{_Auth.state.errmsg}}
        </p>
    </div>
</template>

<style scoped>
    .errcont{
        max-width: 200px;
        height: fit-content;
        padding: 10px;
        border: 3px solid red;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
    .errmsg{
        font-size: 12px;
    }

</style>