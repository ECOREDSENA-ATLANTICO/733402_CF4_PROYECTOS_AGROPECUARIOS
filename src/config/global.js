export default {
  global: {
    componenteFormativo:
      'Evaluación financiera y plan de acción estratégico de un proyecto agropecuario',
    descripcionCurso:
      'La evaluación de proyectos busca identificar, cuantificar y valorar costos y beneficios en un periodo determinado para determinar su viabilidad financiera. Este proceso es crucial para decidir si es conveniente ejecutarlos. La evaluación puede ser para proyectos de inversión privada o social, dependiendo del inversor. Los resultados definirán la tipología del proyecto, ya sea en términos de rentabilidad o beneficios. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Evaluación del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Evaluación financiera',
            hash: '1_1',
          },
          {
            numero: '1.2',
            titulo: 'Evaluación económica y social',
            hash: '1_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },

      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/722103_CF04_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },

  glosario: [
    {
      termino: 'Alcance',
      significado:
        'Es el trabajo que tiene que ser hecho para entregar los resultados planteados. Se refiere a los requerimientos a satisfacer en el proyecto.',
    },
    {
      termino: 'Costo-beneficio',
      significado:
        'Es la efectividad de un proyecto en función de los costos. Criterio de evaluación que establece la relación entre los recursos asignados y los objetivos alcanzados. También se usan las expresiones costo – eficacia y costo – efectividad.',
    },
    {
      termino: 'Indicadores',
      significado:
        'Datos operativos extraídos a partir de los objetivos y resultados que pretenden cuantificar y mostrar el impacto que el proyecto está teniendo en sus diferentes aspectos (beneficiarios, calidad, cantidad, tiempo, etcétera).',
    },
    {
      termino: 'Proyecto',
      significado:
        'Es un trabajo o esfuerzo que se ejecuta una sola vez y que persigue un fin específico, y tiene como característica principal producir resultados únicos como un producto o un servicio.',
    },
    {
      termino: 'Tasa interna de retorno (TIR)',
      significado:
        'Tasa de descuentos que equivale al valor presente del flujo de caja neto en relación con el costo inicial de un proyecto.',
    },
    {
      termino: 'Valor presente neto (VAN)',
      significado:
        'Valor presente de la corriente estimada de los flujos de caja neto de un proyecto, descontando el costo de capital de la firma, menos el costo inicial del proyecto.',
    },

    {
      termino: 'Viabilidad',
      significado:
        'Probabilidad que tiene un proyecto de aportar un nivel aceptable de beneficios a sus destinatarios una vez finalizada la ayuda comunitaria.',
    },
  ],
  referencias: [
    {
      referencia:
        'Córdoba Padilla, M. (2011). Formulación y  Evaluación de Proyectos. Ecoe Ediciones.',
    },
    {
      referencia:
        'Departamento Nacional de Planeación, (2016). Documento guía del módulo de capacitación en teoría de proyectos. DNP.',
      link: 'https://www.dnp.gov.co/NuevaMGA/Paginas/Ayuda-de-la-MGA.aspx',
    },
    {
      referencia:
        'Hernández Diaz, G. A., Matamoros Cárdenas, M. y Sánchez Segura, A. F. (2019). Actualización de la estimación de los indicadores “Razón Precio-Cuenta”. Dirección de estudios económicos.',
    },
    {
      referencia:
        'Miranda Miranda, J. J. (2005). Gestión de Proyectos. Identificación - Formulación - Evaluación: Financiera, económica, Social, Ambiental. MM Editores.',
    },
    {
      referencia:
        'Puentes Montañez, G. A. (2011). Formulación y Evaluación de Proyectos Agropecuarios. Ecoe Ediciones.',
    },
    {
      referencia:
        'Sosa Flores, M., Ribet Cuadot, M. y Hernández Pérez, F. A. (2007). Fundamentos teórico-metodológicos para la evaluación económico-financiera de proyectos de inversión. El Cid Editor S.A.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Roberto Augusto Bernal Duque',
          cargo: 'Experto temático',
          centro:
            'Centro de desarrollo agroempresarial - Regional Cundinamarca',
        },
        {
          nombre: 'Yeison Farid Méndez Ortiz',
          cargo: 'Experto temático',
          centro: 'Centro agropecuario “La Granja” - Regional Tolima',
        },
        {
          nombre: 'Orlando Barón Méndez',
          cargo: 'Experto temático',
          centro:
            'Centro de desarrollo agroempresarial - Regional Cundinamarca',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de diseño y metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro para la industria de la Comunicación gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluación Instruccional',
          centro: 'Centro de diseño y metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro industrial del diseño y la manufactura - Regional Santander',
        },
        {
          nombre: 'Fabian Cuartas Donado',
          cargo: 'Evaluador Instruccional',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Diseño web',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Jorge Leonardo Camacho Pardo',
          cargo: 'Desarrollo Fullstack ',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Eulises Orduz Amezquita',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Nelson Ivan Vera Briceño',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validación de recursos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebrat',
          cargo: 'Validación de recursos digitales ',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga -  Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
