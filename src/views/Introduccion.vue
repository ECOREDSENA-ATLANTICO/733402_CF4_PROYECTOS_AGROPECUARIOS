<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 Estimado aprendiz, a la hora de hablar de proyectos, principalmente en la evaluación, es relevante hacer un recorrido en el tiempo y referirnos a los aspectos trascendentales, según algunos autores. Contemplado dentro del plan de estudios del programa, evaluación financiera y plan de acción estratégico de un proyecto agropecuario, lo invitamos a recorrer el siguiente video:  
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/x63kPVhURHI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption Nota. Elaboración propia.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
