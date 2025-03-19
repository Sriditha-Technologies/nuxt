<template>
    <header class="py-4 border-6 bg-yellow">
        <nav class="bg-purple-900 shadow-lg p-3 text-white text-lg flex justify-between">
            <div class="flex" gap-2 bg-yellow justify-center>
                <NuxtLink class="mr-4" to="/">Dashboard</NuxtLink>
                <NuxtLink class="mr-4" to="/Profile">Profile</NuxtLink>
                <NuxtLink class="mr-4" to="/Tables">Tables</NuxtLink>
                <NuxtLink class="mr-4" to="/Notifications">Notifications</NuxtLink>
                <input type="text" class="ml-4" placeholder="search...">
                <NuxtLink class="ml-4" to="/SignIn">SignIn</NuxtLink>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
</script>