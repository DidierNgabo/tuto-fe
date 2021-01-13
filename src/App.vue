<template>
  <div id="app">
    <div id="nav">
     <nav class="navbar navbar-expand navbar-dark bg-dark">
       <router-link to="/" class="navbar-brand">DiddyCode</router-link>
       <div class="navbar-nav mr-auto">
         <li class="nav-item">
           <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
         </li>
         <li class="nav-item">
           <router-link to="/add" class="nav-link">Add tutorial</router-link>
         </li>
       </div>
     </nav>
     </div>

     <div class="container mt-3">
       <router-view/>
     </div>
  </div>
</template>

<style>
</style>
