<template>
    <div class="grid grid-cols-3 gap-4">
        <div class="row-span-1 col-span-1 gap-4">
            <div>
               <h1>Richard Davis</h1>
            </div>
            <div clas="rows-span-1 cols-start-2 cols-end-3">
                <nav class="flex-cotainer items-center">
                    <div class="flex" gap-2 bg-yellow justify-center>
                        <icon name="logos:house"></icon>App
                        <icon name="logos:meaasge"></icon>Message
                        <icon name="logos:setting"></icon>Setting
                    </div>
                </nav>
            </div>
        </div>
        <div class="row-span-1 cols-span-1">
            <div class="cols-span-1">
               <p class="font-bold">Platform settings</p>
            </div>
            <div class="row-span-1 cols-span-1">
                <h1 class="font-bold">Account</h1>
                    <p>
                        <icon name="logos:switches"></icon>Email me when someone followes me<br />
                        <icon name="logos:switches"></icon>Email me when someone answers on my post<br />
                        <icon name="logos:switches"></icon>Email me when someone mensions me
                    </p>                       
            </div>
            <div class="row-span-2 cols-span-1">
                <h1 class="font-bold">Application</h1>
                <p>
                    <icon name="logos:switches"></icon>New launches and projects<br />
                    <icon name="logos:switches"></icon>monthly product update<br />
                    <icon name="logos:switches"></icon>Subscribe to Newsletter
                </p>
            </div>
        </div>
        <div>
            <div class="row-span-1 cols-span-2">
                <h1 class="font-bold"><center>Profile information</center></h1>
                <p><center>Hi, I'm Alec Thompson, Decisions: If you can't decide,
                    the answer is no. If two equally difficult paths, 
                    choose the one more painful in the short term 
                    (pain avoidance is creating an illusion of equality).</center>
                </p>
            </div>
            <div class="row-span-2 cols-span-2">
                <label>First Name : Alec M.Thomson</label><br />
                <label>Mobile : (44)123 1234 123</label><br />                   
                <label>Email : alecthompson@gmail.com</label><br />
                <label>Location : USA</label><br />
                <label>Social : @facebook @twitter </label><br />
            </div>
        </div>
        <div>
            <div class="cols-start-3 mt-2 cols-span-end gap-4">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Platform Settings</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sopie.B</td>
                            <td>REPLY</td>
                        </tr>
                        <tr>
                            <td>Alexander</td>
                            <td>REPLY</td>
                        </tr>
                        <tr>
                            <td>Ivanna</td>
                            <td>REPLY</td>
                        </tr>
                        <tr>
                            <td>Peterson</td>
                            <td>REPLY</td>
                        </tr>
                        <tr>
                            <td>Bruce Mars</td>
                            <td>REPLY</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div class="grid grid-columns-4">
        <div>
            <h1 class="font-bold ">Projects</h1>
            <p>Architects design houses</p>
            <div class="cols-span-1">
                <img width="100" src="home-decor-1.webp" alt="Home Decor 1" />
                <h1>Project #1</h1>
                <p class="font-bold">Modern</p>
                <p>As uber works through a huge amount of internal management turmoil.</p>
                <button class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-lg cursor-pointer">
                    View Project
                </button>
            </div> 
            <div class="cols-span-2">
                <img width="100" src="home-decor-2.webp" alt="Home Decor 2" />
                <h1>Project #2</h1>
                <p class="font-bold">Scandinavin</p>
                <p>Music is something that every person has his or her own specific opinion about.</p>
                <button class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-lg cursor-pointer">
                   View Project
                </button>
            </div>
            <div class="cols-span-3">
                <img width="100" src="home-decor-3.webp" alt="Home Decor 3" />
                <h1>Project #3</h1>
                <p class="font-bold">Minimalist</p>
                <p>Different people have different taste, and various types on music.</p>
                <button class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-lg cursor-pointer">
                   View Project
                </button>
            </div>
            <div class="cols-span-4">
                <img width="100" src="home-decor-4.avif" alt="Home Decor 4" />
                <h1>Project #4</h1>
                <p class="font-bold">Gothic</p>
                <p>Why would anyone pick blue over pink? Pink is obviously a better color.</p>
                <button class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-lg cursor-pointer">
                    View Project
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HomeDecor1 from '~/public/images/home-decor-1.wepb';
import HomeDecor2 from '~/public/images/home-decor-2.wepb';
import HomeDecor3 from '~/public/images/home-decor-3.wepb';
import HomeDecor4 from '~/public/images/home-decor-4.wepb';
</script>