<template>
    <div>
        <h1 class="font-bold"><center>RichardDavis</center></h1>
        <p class="font-bold">Platform settings</p>
        <div>
            <section>
                <h1 class="font-bold">Account</h1>
                <p>Email me when someone followes me<br />
                Email me when someone answers on my post<br />
                Email me when someone mensions me</p>
            </section>
            <section>
                <h1 class="font-bold">Application</h1>
                <p>New launches and projects<br />
                monthly product update<br />
                Subscribe to Newsletter</p>
            </section>
        </div>
        <div class="form-group">
            <form><h1 class="font-bold"><center>Profile information</center></h1>
               <p><center>Hi, I'm Alec Thompson, Decisions: If you can't decide,
                the answer is no. If two equally difficult paths, 
                choose the one more painful in the short term 
                (pain avoidance is creating an illusion of equality).</center>
               </p>
               <Hr size="4"></Hr>
               <div class="align-center">
                   <label>First Name : Alec M.Thomson</label><br />
                   <label>Mobile : (44)123 1234 123</label><br />
                   <label>Email : alecthompson@gmail.com</label><br />
                   <label>Location : USA</label><br />
                   <label>Social : @facebook @twitter </label><br />
               </div>
            </form>
        </div>
        <div>
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
    <div class="container">
        <h1 class="font-bold ">Projects</h1>
        <p>Architects design houses</p>
        <div>
           <img src="~/asserts/images/home-decor-1.webp" alt="" />
            <h1>Project #1</h1>
            <p class="font-bold">Modern</p>
            <p>As uber works through a huge amount of internal management turmoil.</p>
            <button class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-lg cursor-pointer">
               View Project
            </button>
        </div>
        <div>
            <img src="~/assets/images/home-decor-2.webp" alt="" />
            <h1>Project #2</h1>
            <p class="font-bold">Scandinavin</p>
            <p>Music is something that every person has his or her own specific opinion about.</p>
            <button class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-lg cursor-pointer">
               View Project
            </button>
        </div> 
        <div>
            <img src="~/assets/images/home-decor-3.webp" alt="" />
            <h1>Project #3</h1>
            <p class="font-bold">Minimalist</p>
            <p>Different people have different taste, and various types on music.</p>
            <button class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-lg cursor-pointer">
               View Project
            </button>
        </div>
        <div>
            <img src="~/assets/images/home-decor-4.avif" alt="" />
            <h1>Project #4</h1>
            <p class="font-bold">Gothic</p>
            <p>Why would anyone pick blue over pink? Pink is obviously a better color.</p>
            <button class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-lg cursor-pointer">
               View Project
            </button>
        </div> 
    </div>
</template>

<script setup>
    import image from  '@/assets/images/home-decor-1.webp';
    import image from  '@/assets/images/home-decor-2.webp';
    import image from  '@/assets/images/home-decor-3.webp';
    import image from  '@/assets/images/home-decor-4.avif';
</script>