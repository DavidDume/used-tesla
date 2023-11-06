
<template>
    <header class="bg-white w-full z-10">
       <nav class="flex items-center justify-between px-4 py-4 text-gray-600">
       <h3 class="font-sans font-bold text-xl tracking-widest hover:text-emerald">
           <RouterLink to="/" class="text-2xl">Used Tesla</RouterLink>
       </h3>
       <div class="md:block hidden">
           <ul class="flex uppercase">
               <li class="p-6 font-semibold tracking-widest ">
                   <RouterLink to="/" class="hover:text-emerald-500">HOME</RouterLink>
               </li>
               <li class="p-6 font-semibold tracking-widest">
                   <RouterLink to="/login" class="hover:text-emerald-500" v-if="!data?.user">Login</RouterLink>
                   <a href="" v-else>Account</a>
               </li>
               <li class="p-6 font-semibold tracking-widest ">
                   <RouterLink to="/register" class="hover:text-emerald-500" v-if="!data?.user">register</RouterLink>
                   <a  class="hover:cursor-pointer" @click="handleLogout" v-else>logout</a>
               </li>
           </ul>
       </div>
       <div class="md:hidden text-2xl hover:cursor-pointer" @click="showMenu = !showMenu">
           <div :class="showMenu ? '' :'hidden'">
           <i class="pi pi-times" ></i> 
           </div>
           <div class="text-2xl hover:cursor-pointer" :class="showMenu ? 'hidden' :''">
           <i class="pi pi-align-justify"></i>
           </div>
               
       </div>
       </nav>
       <div class="bg-white text-right shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] md:hidden animate-fade" :class="showMenu ? '' : 'hidden'">
           <ul class="text-gray-600">
           
            <li class="p-4 border-t-2 border-gray-200 font-semibold tracking-widest uppercase">
                    <RouterLink to="/" class="hover:text-emerald-500">HOME</RouterLink>
            </li>
            <li class="p-4 border-t-2 border-gray-200 font-semibold tracking-widest uppercase">
                <RouterLink to="/login" class="hover:text-emerald-500" v-if="!data?.user">Login</RouterLink>
                <a href="" v-else>Account</a>
            </li>
            <li class="p-4 border-t-2 border-gray-200 font-semibold tracking-widest uppercase">
                <RouterLink to="/register" class="hover:text-emerald-500" v-if="!data?.user">register</RouterLink>
                <a @click="handleLogout" v-else>logout</a>
            </li>
           </ul>
       </div>
     
   </header>

   <div>
    <slot />
   </div>
</template>

<script setup lang="ts">


   const {data, signOut} = useAuth()


   const handleLogout = async() => {
       await signOut()
   }

   const showMenu = ref(false)

</script>

<style scoped>

</style>