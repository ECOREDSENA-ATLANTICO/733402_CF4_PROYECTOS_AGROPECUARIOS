<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 <b>Evaluación del proyecto:</b> determina su viabilidad y eficiencia, considerando aspectos financieros y sociales. Se realiza en tres etapas: preparación, ejecución y operación, usando indicadores como flujo de caja. Los objetivos incluyen examinar proyectos, medir resultados y evaluar recursos. Tipologías de evaluación incluyen ex-ante, intra, post, y ex-post, además de formativa y sumativa, para medir el impacto y eficacia en cada fase del ciclo de vida del proyecto.
    p.mb-5 <b>La evaluación financiera de proyectos:</b> analiza costos y beneficios para determinar la viabilidad de un proyecto. Utiliza indicadores como el Valor Presente Neto (VPN), la Tasa Interna de Retorno (TIR) y la Relación Costo - Beneficio. Si el VPN es positivo, el proyecto se acepta; si es negativo, se rechaza. Un VPN igual a cero deja la decisión al evaluador.
    p.mb-5 <b>La evaluación económica y social</b> busca identificar las cualidades y el impacto de un proyecto en el bienestar económico del país. Se diferencia de la evaluación financiera al medir el rendimiento en términos de recursos reales para la sociedad. Utiliza la Tasa Social de Descuento para evaluar la rentabilidad pública. Se basa en los costos verdaderos de oportunidad. Las diferencias entre el análisis financiero y el económico y social se reflejan en la tabla comparativa.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
