<script>
export default {
    name: 'Card',
    props: {
      title: String,
      originalTitle: String,
      language: String,
      vote: String,
      image: String,
      bio: String,
      relase: String
    },
}
</script>

<template>
  
  <div class="col-3">
    <div class="card-bt">

      <!-- Cover Front-faces -->
      <div class="cover">
        
        <img v-if="image == null" src="../../assets/notimage.png" alt="">
        <img v-else :src="'https://image.tmdb.org/t/p/w342/' + image"  :alt=" title ">

      </div>

      <!-- Back-faces  -->
      <div class="bio">
        <div class="bio-up">
          
          <!-- Titles    -->
            <h6>{{ title }}</h6>
    
          <!-- Languages    -->
          <p class="flag" v-if=" language === 'en'">
            <span>Language: </span>
            <img src="/en.png" alt="en">
          </p>
          <p class="flag" v-else-if=" language === 'it'">
            <span>Language: </span>
            <img src="/it.png" alt="it">
          </p>
          <p class="flag" v-else-if=" language === 'ja'">
            <span>Language: </span>
            <img src="/jp.png" alt="jp">
          </p>
          <p class="flag" v-else-if=" language === 'es'">
            <span>Language: </span>
            <img src="/sp.png" alt="es">
          </p>
          <p class="flag" v-else-if=" language === 'de'">
            <span>Language: </span>
            <img src="/de.png" alt="de">
          </p>
          <p class="flag" v-else-if=" language === 'fr'">
            <span>Language: </span>
            <img src="/fr.png" alt="fr">
          </p>
          <p v-else>Language: {{ language }}</p>

        
          <!-- Ratings    -->
            <div class="star">
              <p v-for="(star, index) in Math.ceil( vote / 2)" :key="index">
                <i class="fa-solid fa-star"></i>
              </p>
              <p v-for="(star, index) in Math.floor(5 - vote / 2)" :key="index">
              <i class="fa-regular fa-star"></i>
              </p>  
            </div>

            <!-- Relase  -->
            <div>
              <span>Relase: </span>
              <p>{{ relase }}</p>
            </div>

        </div>


      <!-- Descriptions    -->
        <div class="description">
          <p>{{ bio }}</p>
        </div>

      </div>
    </div>
  </div>

</template>

<style lang="scss">

.card-bt{
  text-align: center;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5); 
  margin: 40px 0px;
  z-index: 2;

  img {
    width: 100%;
    height: 200px;
  }
  
  .bio {
    width: 100%;
    position: absolute; 
    top: 0px;
    display: none;
   
    p {
      font-size: 15px;
    }

    h6 {
      color: red;
    }
  }

}

.star {
    display: flex;
    justify-content: center;
    color: yellow;
  }


.card-bt:hover {
  width: 100%;
  transform: translateY(-20px);
  .cover {
    opacity: 0.3;
  }

  .bio {
    height: 100%;
    display: block;
    opacity: 1;
    z-index: 3;
    color: white;
    display: flex;
     
  }
  .description {
    padding: 20px 0;
    width: 50%;
    overflow-y: auto;
  }
  
  .bio-up {
    padding-top: 10px;
    width: 50%;
  }
  .flag {
    img {
      width: 20px;
      height: 15px;
    }
  }
}

.plus {
  .card-bt {
    
    img {
      height: 400px;
    }

    h6 {
      font-size: 20px;
    }
  }
}

</style>