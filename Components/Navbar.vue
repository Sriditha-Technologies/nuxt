<template>
    <header class="py-4 border-6 bg-yellow">
        <nav class="flex-cotainer items-center">
            <div class="flex" gap-2 bg-yellow justify-center>
                <NuxtLink class="ml-4" to="/">Dashboard</NuxtLink>
                <NuxtLink class="ml-4" to="/Profile">Profile</NuxtLink>
                <NuxtLink class="ml-4" to="/Tables">Tables</NuxtLink>
                <NuxtLink class="ml-4" to="/Notifications">Notifications</NuxtLink>
                <input type="text" class="ml-4" placeholder="search...">
                <NuxtLink class="ml-4" to="/SignIn">SignIn</NuxtLink>
            </div>
        </nav>
    </header>
    <Hr size="4"></Hr>

</template>

<script setup lang="ts">
</script>