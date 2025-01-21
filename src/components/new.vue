<script setup>
import { defineProps } from 'vue';
defineProps({
    title:{
    type: String,
    default: 'Handing' ,
  },

})
</script>

<template>
    <div id="news" class="container section border border-2  p-4 mt-5">
        <div class="row">
            <div class="col-lg-12">
                <div class="news-post">
                    <h3><a href="">{{ title }}</a></h3>
                    <div class="post-date">April 30, 2020</div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit saepe voluptas ratione maiores debitis veniam non sed doloribus ipsa. Neque cum sint qui enim dolorem tempora facere! Rem, mollitia asperiores.
                    </p>
                    <a href="" class="readmore">Readmore</a>
                </div>
            </div>
        </div><br>

    </div>
</template>