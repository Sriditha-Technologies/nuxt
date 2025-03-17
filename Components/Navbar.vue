<template>
    <header class="py-4 border-6">
        <nav class="flex-cotainer items-center">
            <div class="flex" gap-2 bg-yellow justify-center>
                <NuxtLink class="ml-4" to="/">Dashboard</NuxtLink>
                <NuxtLink class="ml-4" to="/Profile">Profile</NuxtLink>
                <NuxtLink class="ml-4" to="/Tables">Tables</NuxtLink>
                <NuxtLink class="ml-4" to="/Notifications">Notifications</NuxtLink>
                <NuxtLink class="ml-4" to="/AuthPages">AuthPages</NuxtLink>
                <input type="text" class="ml-4" placeholder="search...">
                <NuxtLink class="ml-4" to="/SignIn">SignIn</NuxtLink>
                <NuxtLink class="ml-4" to="/SignUp">SignUp</NuxtLink>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
</script>