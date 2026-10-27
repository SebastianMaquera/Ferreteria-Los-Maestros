// Desarrollado por: Sebastián Maquera (src/data/productos.js)

export const CATEGORIAS = [
  "Todas",
  "Mat. Construcción",
  "Pinturas",
  "Herramientas",
  "Gasfitería",
  "Electricidad",
  "Tornillería",
  "Madera",
  "Seguridad",
  "Jardín",
];

export const PRODUCTOS = [
  // ==================== MAT. CONSTRUCCIÓN ====================
  { id: 'MC001', nombre: 'Cemento Polpaico gris 25 kg', categoria: 'Mat. Construcción', subcategoria: 'Cementos', marca: 'Polpaico', unidad: 'Saco', precio: 5990, stock: 80, stockMinimo: 20, destacado: true, imagen: '/img/PolpaicoCemento.jpg' },
  { id: 'MC002', nombre: 'Cemento Melón blanco 25 kg', categoria: 'Mat. Construcción', subcategoria: 'Cementos', marca: 'Melón', unidad: 'Saco', precio: 7490, stock: 40, stockMinimo: 10, destacado: false, imagen: '/img/MC002.jpg' },
  { id: 'MC003', nombre: 'Mortero cola cerámica 25 kg', categoria: 'Mat. Construcción', subcategoria: 'Morteros', marca: 'Volcán', unidad: 'Saco', precio: 5200, stock: 50, stockMinimo: 15, destacado: false, imagen: '/img/MC003.jpg' },
  { id: 'MC004', nombre: 'Mortero nivelador piso 25 kg', categoria: 'Mat. Construcción', subcategoria: 'Morteros', marca: 'Weber', unidad: 'Saco', precio: 6490, stock: 30, stockMinimo: 10, destacado: false, imagen: '/img/MC004.jpg' },
  { id: 'MC005', nombre: 'Arena fina construcción 25 kg', categoria: 'Mat. Construcción', subcategoria: 'Áridos', marca: 'Granel', unidad: 'Saco', precio: 1800, stock: 60, stockMinimo: 20, destacado: false, imagen: '/img/MC005.jpg' },
  { id: 'MC006', nombre: 'Ripio 25 kg', categoria: 'Mat. Construcción', subcategoria: 'Áridos', marca: 'Granel', unidad: 'Saco', precio: 1500, stock: 60, stockMinimo: 20, destacado: false, imagen: '/img/MC006.jpg' },
  { id: 'MC007', nombre: 'Ladrillo fiscal N°5', categoria: 'Mat. Construcción', subcategoria: 'Ladrillos', marca: 'Local', unidad: 'Unidad', precio: 380, stock: 500, stockMinimo: 100, destacado: false, imagen: '/img/MC007.jpg' },
  { id: 'MC008', nombre: 'Ladrillo prensado 6x14x29 cm', categoria: 'Mat. Construcción', subcategoria: 'Ladrillos', marca: 'Melón', unidad: 'Unidad', precio: 550, stock: 300, stockMinimo: 80, destacado: false, imagen: '/img/MC008.jpg' },
  { id: 'MC009', nombre: 'Bloque de hormigón 19x19x39 cm', categoria: 'Mat. Construcción', subcategoria: 'Bloques', marca: 'Volcán', unidad: 'Unidad', precio: 1200, stock: 200, stockMinimo: 50, destacado: false, imagen: '/img/MC009.jpg' },
  { id: 'MC010', nombre: 'Bloque liviano 10x20x40 cm', categoria: 'Mat. Construcción', subcategoria: 'Bloques', marca: 'Ytong', unidad: 'Unidad', precio: 1690, stock: 100, stockMinimo: 30, destacado: false, imagen: '/img/MC010.jpg' },

  // ==================== PINTURAS ====================
  { id: 'PT001', nombre: 'Pintura látex interior 1 galón blanco', categoria: 'Pinturas', subcategoria: 'Látex', marca: 'Sipa', unidad: 'Galón', precio: 9990, stock: 40, stockMinimo: 10, destacado: true, imagen: '/img/GS001_Ca_er_a_PVC_1_2_x_6m.jpg' },
  { id: 'PT002', nombre: 'Pintura látex interior 4 litros (varios col.)', categoria: 'Pinturas', subcategoria: 'Látex', marca: 'Sipa', unidad: 'Envase 4L', precio: 12990, stock: 30, stockMinimo: 8, destacado: false, imagen: '/img/PinturaLatex.jpg' },
  { id: 'PT003', nombre: 'Pintura látex exterior 1 galón blanco', categoria: 'Pinturas', subcategoria: 'Látex', marca: 'Kömex', unidad: 'Galón', precio: 13990, stock: 25, stockMinimo: 8, destacado: false, imagen: '/img/HE006_Caladora_500W.jpg' },
  { id: 'PT004', nombre: 'Esmalte sintético 1/4 litro (varios col.)', categoria: 'Pinturas', subcategoria: 'Esmalte', marca: 'Sipa', unidad: '1/4 L', precio: 4290, stock: 50, stockMinimo: 15, destacado: false, imagen: '/img/PT004.jpg' },
  { id: 'PT005', nombre: 'Esmalte sintético 1 litro (varios col.)', categoria: 'Pinturas', subcategoria: 'Esmalte', marca: 'Sipa', unidad: '1 litro', precio: 9490, stock: 30, stockMinimo: 10, destacado: false, imagen: '/img/PT005.jpg' },
  { id: 'PT006', nombre: 'Pintura antihumedad 1 galón blanco', categoria: 'Pinturas', subcategoria: 'Antihumedad', marca: 'Kömex', unidad: 'Galón', precio: 17990, stock: 15, stockMinimo: 5, destacado: false, imagen: '/img/PT006.jpg' },
  { id: 'PT007', nombre: 'Rodillo lana 23 cm con mango', categoria: 'Pinturas', subcategoria: 'Accesorios', marca: 'Wurth', unidad: 'Unidad', precio: 3990, stock: 30, stockMinimo: 10, destacado: false, imagen: '/img/PT007.jpg' },
  { id: 'PT008', nombre: 'Brocha cerda natural 3"', categoria: 'Pinturas', subcategoria: 'Accesorios', marca: 'Sipa', unidad: 'Unidad', precio: 1690, stock: 40, stockMinimo: 10, destacado: false, imagen: '/img/PT008.jpg' },
  { id: 'PT009', nombre: 'Cinta de enmascarar 24mm x 50m', categoria: 'Pinturas', subcategoria: 'Accesorios', marca: '3M', unidad: 'Rollo', precio: 2490, stock: 60, stockMinimo: 20, destacado: false, imagen: '/img/PT009.jpg' },

  // ==================== HERRAMIENTAS ====================
  { id: 'HM001', nombre: 'Martillo carpintero 500g', categoria: 'Herramientas', subcategoria: 'Manuales', marca: 'Stanley', unidad: 'Unidad', precio: 7990, stock: 20, stockMinimo: 5, destacado: true, imagen: '/img/MartilloCarpintero.jpg' },
  { id: 'HM002', nombre: 'Alicate universal 8"', categoria: 'Herramientas', subcategoria: 'Manuales', marca: 'Stanley', unidad: 'Unidad', precio: 7290, stock: 15, stockMinimo: 5, destacado: false, imagen: '/img/GS006_Uni_n_doble_PVC_1_2_.jpg' },
  { id: 'HM003', nombre: 'Destornillador plano 6x100mm', categoria: 'Herramientas', subcategoria: 'Manuales', marca: 'Stanley', unidad: 'Unidad', precio: 1990, stock: 30, stockMinimo: 10, destacado: false, imagen: '/img/GS007_Llave_de_paso_esfera_1_2_lat_n.jpg' },
  { id: 'HM004', nombre: 'Destornillador Phillips PH2 6x100mm', categoria: 'Herramientas', subcategoria: 'Manuales', marca: 'Stanley', unidad: 'Unidad', precio: 1990, stock: 30, stockMinimo: 10, destacado: false, imagen: '/img/GS007_Llave_de_paso_esfera_1_2_lat_n.jpg' },
  { id: 'HM005', nombre: 'Llave ajustable 10"', categoria: 'Herramientas', subcategoria: 'Manuales', marca: 'Bahco', unidad: 'Unidad', precio: 8490, stock: 12, stockMinimo: 4, destacado: false, imagen: '/img/HM005_Llave_ajustable_10_.jpg' },
  { id: 'HM006', nombre: 'Juego llaves hexagonales métrico x9', categoria: 'Herramientas', subcategoria: 'Manuales', marca: 'Stanley', unidad: 'Set', precio: 5490, stock: 15, stockMinimo: 5, destacado: false, imagen: '/img/HM006_Juego_llaves_hexagonales_m_trico_x9.jpg' },
  { id: 'HM007', nombre: 'Serrucho 20" 7 dientes por pulgada', categoria: 'Herramientas', subcategoria: 'Manuales', marca: 'Stanley', unidad: 'Unidad', precio: 9490, stock: 10, stockMinimo: 3, destacado: false, imagen: '/img/HM007_Serrucho_20_7_dientes_por_pulgada.jpg' },
  { id: 'HM008', nombre: 'Nivel de burbuja 60 cm', categoria: 'Herramientas', subcategoria: 'Manuales', marca: 'Stanley', unidad: 'Unidad', precio: 10490, stock: 8, stockMinimo: 3, destacado: false, imagen: '/img/HM008_Nivel_de_burbuja_60_cm.jpg' },
  { id: 'HM009', nombre: 'Metro de tela 5m', categoria: 'Herramientas', subcategoria: 'Manuales', marca: 'Stanley', unidad: 'Unidad', precio: 4290, stock: 25, stockMinimo: 8, destacado: false, imagen: '/img/HM009_Metro_de_tela_5m.jpg' },
  { id: 'HM010', nombre: 'Cinta métrica 8m autoblocante', categoria: 'Herramientas', subcategoria: 'Manuales', marca: 'Stanley', unidad: 'Unidad', precio: 6490, stock: 20, stockMinimo: 6, destacado: false, imagen: '/img/HM010_Cinta_m_trica_8m_autoblocante.jpg' },
  { id: 'HE001', nombre: 'Taladro percutor 650W 13mm', categoria: 'Herramientas', subcategoria: 'Eléctricas', marca: 'Makita', unidad: 'Unidad', precio: 79990, stock: 8, stockMinimo: 2, destacado: true, imagen: '/img/MC007_Ladrillo_fiscal_N_5.jpg' },
  { id: 'HE002', nombre: 'Atornillador inalámbrico 12V (kit)', categoria: 'Herramientas', subcategoria: 'Eléctricas', marca: 'Makita', unidad: 'Unidad', precio: 104990, stock: 5, stockMinimo: 2, destacado: false, imagen: '/img/MC008_Ladrillo_prensado_6x14x29_cm.jpg' },
  { id: 'HE003', nombre: 'Amoladora angular 4.5" 800W', categoria: 'Herramientas', subcategoria: 'Eléctricas', marca: 'Makita', unidad: 'Unidad', precio: 54990, stock: 8, stockMinimo: 2, destacado: false, imagen: '/img/MC009_Bloque_de_hormig_n_19x19x39_cm.jpg' },
  { id: 'HE004', nombre: 'Sierra circular 7-1/4" 1200W', categoria: 'Herramientas', subcategoria: 'Eléctricas', marca: 'Skil', unidad: 'Unidad', precio: 72990, stock: 4, stockMinimo: 1, destacado: false, imagen: '/img/MC010_Bloque_liviano_10x20x40_cm.jpg' },
  { id: 'HE005', nombre: 'Lijadora orbital 180W', categoria: 'Herramientas', subcategoria: 'Eléctricas', marca: 'Black+Decker', unidad: 'Unidad', precio: 34990, stock: 6, stockMinimo: 2, destacado: false, imagen: '/img/PT002_Pintura_l_tex_interior_4_litros_varios_col_.jpg' },
  { id: 'HE006', nombre: 'Caladora 500W', categoria: 'Herramientas', subcategoria: 'Eléctricas', marca: 'Skil', unidad: 'Unidad', precio: 42990, stock: 4, stockMinimo: 1, destacado: false, imagen: '/img/PT006_Pintura_antihumedad_1_gal_n_blanco.jpg' },

  // ==================== GASFITERÍA ====================
  { id: 'GS001', nombre: 'Cañería PVC 1/2" x 6m', categoria: 'Gasfitería', subcategoria: 'Tuberías', marca: 'Tigre', unidad: 'Unidad', precio: 5490, stock: 30, stockMinimo: 10, destacado: false, imagen: '/img/PT004_Esmalte_sint_tico_1_4_litro_varios_col_.jpg' },
  { id: 'GS002', nombre: 'Cañería PVC 3/4" x 6m', categoria: 'Gasfitería', subcategoria: 'Tuberías', marca: 'Tigre', unidad: 'Unidad', precio: 7490, stock: 25, stockMinimo: 8, destacado: false, imagen: '/img/PT004_Esmalte_sint_tico_1_4_litro_varios_col_.jpg' },
  { id: 'GS003', nombre: 'Cañería cobre 1/2" x 5m', categoria: 'Gasfitería', subcategoria: 'Tuberías', marca: 'Codelco', unidad: 'Unidad', precio: 17990, stock: 15, stockMinimo: 5, destacado: false, imagen: '/img/PT008_Brocha_cerda_natural_3_.jpg' },
  { id: 'GS004', nombre: 'Codo PVC 1/2" 90°', categoria: 'Gasfitería', subcategoria: 'Uniones', marca: 'Tigre', unidad: 'Unidad', precio: 390, stock: 100, stockMinimo: 30, destacado: false, imagen: '/img/PT009_Cinta_de_enmascarar_24mm_x_50m.jpg' },
  { id: 'GS005', nombre: 'Te PVC 1/2"', categoria: 'Gasfitería', subcategoria: 'Uniones', marca: 'Tigre', unidad: 'Unidad', precio: 450, stock: 80, stockMinimo: 25, destacado: false, imagen: '/img/HM001_Martillo_carpintero_500g.jpg' },
  { id: 'GS006', nombre: 'Unión doble PVC 1/2"', categoria: 'Gasfitería', subcategoria: 'Uniones', marca: 'Tigre', unidad: 'Unidad', precio: 320, stock: 80, stockMinimo: 25, destacado: false, imagen: '/img/HM002_Alicate_universal_8_.jpg' },
  { id: 'GS007', nombre: 'Llave de paso esfera 1/2" latón', categoria: 'Gasfitería', subcategoria: 'Llaves', marca: 'Emmeti', unidad: 'Unidad', precio: 3490, stock: 30, stockMinimo: 10, destacado: false, imagen: '/img/HM004_Destornillador_Phillips_PH2_6x100mm.jpg' },
  { id: 'GS008', nombre: 'Llave de paso esfera 3/4" latón', categoria: 'Gasfitería', subcategoria: 'Llaves', marca: 'Emmeti', unidad: 'Unidad', precio: 4990, stock: 20, stockMinimo: 8, destacado: false, imagen: '/img/HM003_Destornillador_plano_6x100mm.jpg' },
  { id: 'GS009', nombre: 'Grifería lavamanos monocomando cromo', categoria: 'Gasfitería', subcategoria: 'Grifería', marca: 'Corona', unidad: 'Unidad', precio: 22990, stock: 10, stockMinimo: 3, destacado: true, imagen: '/img/Griferia.jpg' },
  { id: 'GS010', nombre: 'Grifería cocina monocomando cuello alto', categoria: 'Gasfitería', subcategoria: 'Grifería', marca: 'Corona', unidad: 'Unidad', precio: 28990, stock: 8, stockMinimo: 2, destacado: false, imagen: '/img/GS010.jpg' },
  { id: 'GS011', nombre: 'Teflón 3/4" x 12m', categoria: 'Gasfitería', subcategoria: 'Sellos', marca: '3M', unidad: 'Rollo', precio: 790, stock: 80, stockMinimo: 25, destacado: false, imagen: '/img/GS011.jpg' },
  { id: 'GS012', nombre: 'Silicona transparente 280ml', categoria: 'Gasfitería', subcategoria: 'Sellos', marca: 'Wacker', unidad: 'Cartucho', precio: 5490, stock: 25, stockMinimo: 8, destacado: false, imagen: '/img/GS012.jpg' },

  // ==================== ELECTRICIDAD ====================
  { id: 'EL001', nombre: 'Cable unipolar 1.5mm² (por metro)', categoria: 'Electricidad', subcategoria: 'Conductores', marca: 'Condulac', unidad: 'Metro', precio: 590, stock: 100, stockMinimo: 30, destacado: false, imagen: '/img/EL001_Cable_unipolar_1_5mm_por_metro_.jpg' },
  { id: 'EL002', nombre: 'Cable unipolar 2.5mm² (por metro)', categoria: 'Electricidad', subcategoria: 'Conductores', marca: 'Condulac', unidad: 'Metro', precio: 790, stock: 100, stockMinimo: 30, destacado: false, imagen: '/img/EL002_Cable_unipolar_2_5mm_por_metro_.jpg' },
  { id: 'EL003', nombre: 'Cable dúplex paralelo 2x1.5mm² (por metro)', categoria: 'Electricidad', subcategoria: 'Conductores', marca: 'Condulac', unidad: 'Metro', precio: 990, stock: 80, stockMinimo: 25, destacado: false, imagen: '/img/EL003_Cable_d_plex_paralelo_2x1_5mm_por_metro_.jpg' },
  { id: 'EL004', nombre: 'Enchufe empotrar 16A c/tierra (schuko)', categoria: 'Electricidad', subcategoria: 'Enchufes', marca: 'Bticino', unidad: 'Unidad', precio: 3690, stock: 50, stockMinimo: 15, destacado: false, imagen: '/img/EL004_Enchufe_empotrar_16A_c_tierra_schuko_.jpg' },
  { id: 'EL005', nombre: 'Enchufe doble empotrar 16A c/tierra', categoria: 'Electricidad', subcategoria: 'Enchufes', marca: 'Bticino', unidad: 'Unidad', precio: 5490, stock: 40, stockMinimo: 12, destacado: false, imagen: '/img/EL005_Enchufe_doble_empotrar_16A_c_tierra.jpg' },
  { id: 'EL006', nombre: 'Interruptor simple empotrar', categoria: 'Electricidad', subcategoria: 'Interruptores', marca: 'Bticino', unidad: 'Unidad', precio: 3190, stock: 50, stockMinimo: 15, destacado: false, imagen: '/img/EL006_Interruptor_simple_empotrar.jpg' },
  { id: 'EL007', nombre: 'Interruptor doble empotrar', categoria: 'Electricidad', subcategoria: 'Interruptores', marca: 'Bticino', unidad: 'Unidad', precio: 4290, stock: 35, stockMinimo: 10, destacado: false, imagen: '/img/EL007_Interruptor_doble_empotrar.jpg' },
  { id: 'EL008', nombre: 'Tablero eléctrico 4 espacios DIN', categoria: 'Electricidad', subcategoria: 'Tableros', marca: 'Legrand', unidad: 'Unidad', precio: 22990, stock: 8, stockMinimo: 2, destacado: false, imagen: '/img/EL008_Tablero_el_ctrico_4_espacios_DIN.jpg' },
  { id: 'EL009', nombre: 'Disyuntor termomagnético 16A unipolar', categoria: 'Electricidad', subcategoria: 'Tableros', marca: 'Schneider', unidad: 'Unidad', precio: 6490, stock: 20, stockMinimo: 5, destacado: false, imagen: '/img/EL009_Disyuntor_termomagn_tico_16A_unipolar.jpg' },
  { id: 'EL010', nombre: 'Disyuntor termomagnético 25A unipolar', categoria: 'Electricidad', subcategoria: 'Tableros', marca: 'Schneider', unidad: 'Unidad', precio: 6990, stock: 20, stockMinimo: 5, destacado: false, imagen: '/img/EL010_Disyuntor_termomagn_tico_25A_unipolar.jpg' },
  { id: 'EL011', nombre: 'Ampolleta LED 9W E27 luz fría', categoria: 'Electricidad', subcategoria: 'Iluminación', marca: 'Philips', unidad: 'Unidad', precio: 3990, stock: 60, stockMinimo: 20, destacado: false, imagen: '/img/EL011_Ampolleta_LED_9W_E27_luz_fr_a.jpg' },
  { id: 'EL012', nombre: 'Ampolleta LED 12W E27 luz cálida', categoria: 'Electricidad', subcategoria: 'Iluminación', marca: 'Philips', unidad: 'Unidad', precio: 4490, stock: 50, stockMinimo: 15, destacado: false, imagen: '/img/EL012_Ampolleta_LED_12W_E27_luz_c_lida.jpg' },
  { id: 'EL013', nombre: 'Panel LED empotrar 18W 22cm', categoria: 'Electricidad', subcategoria: 'Iluminación', marca: 'Ledvance', unidad: 'Unidad', precio: 11490, stock: 20, stockMinimo: 6, destacado: false, imagen: '/img/EL013_Panel_LED_empotrar_18W_22cm.jpg' },

  // ==================== TORNILLERÍA ====================
  { id: 'TR001', nombre: 'Tornillo autoperf. 8x1" caja 100 unid.', categoria: 'Tornillería', subcategoria: 'Tornillos', marca: 'Hilti', unidad: 'Caja', precio: 2990, stock: 40, stockMinimo: 12, destacado: false, imagen: '/img/TR001_Tornillo_autoperf_8x1_caja_100_unid_.jpg' },
  { id: 'TR002', nombre: 'Tornillo madera 4x40mm caja 100 unid.', categoria: 'Tornillería', subcategoria: 'Tornillos', marca: 'Hilti', unidad: 'Caja', precio: 2490, stock: 40, stockMinimo: 12, destacado: false, imagen: '/img/TR002_Tornillo_madera_4x40mm_caja_100_unid_.jpg' },
  { id: 'TR003', nombre: 'Tornillo volcanita 3.5x25mm caja 200 unid.', categoria: 'Tornillería', subcategoria: 'Tornillos', marca: 'Hilti', unidad: 'Caja', precio: 3490, stock: 30, stockMinimo: 10, destacado: false, imagen: '/img/TR003_Tornillo_volcanita_3_5x25mm_caja_200_unid_.jpg' },
  { id: 'TR004', nombre: 'Taco fisher S6 bolsa 100 unid.', categoria: 'Tornillería', subcategoria: 'Tacos', marca: 'Fischer', unidad: 'Bolsa', precio: 3190, stock: 35, stockMinimo: 10, destacado: false, imagen: '/img/TR004_Taco_fisher_S6_bolsa_100_unid_.jpg' },
  { id: 'TR005', nombre: 'Taco fisher S8 bolsa 50 unid.', categoria: 'Tornillería', subcategoria: 'Tacos', marca: 'Fischer', unidad: 'Bolsa', precio: 2890, stock: 30, stockMinimo: 10, destacado: false, imagen: '/img/TR005_Taco_fisher_S8_bolsa_50_unid_.jpg' },
  { id: 'TR006', nombre: 'Perno hex. 3/8" x 2" c/tuerca y golilla', categoria: 'Tornillería', subcategoria: 'Pernos', marca: 'Granel', unidad: 'Unidad', precio: 290, stock: 200, stockMinimo: 50, destacado: false, imagen: '/img/TR006_Perno_hex_3_8_x_2_c_tuerca_y_golilla.jpg' },
  { id: 'TR007', nombre: 'Perno de anclaje 10x100mm', categoria: 'Tornillería', subcategoria: 'Anclajes', marca: 'Hilti', unidad: 'Unidad', precio: 990, stock: 60, stockMinimo: 15, destacado: false, imagen: '/img/TR007_Perno_de_anclaje_10x100mm.jpg' },
  { id: 'TR008', nombre: 'Anclaje químico epoxi 300ml', categoria: 'Tornillería', subcategoria: 'Anclajes', marca: 'Fischer', unidad: 'Cartucho', precio: 15990, stock: 8, stockMinimo: 2, destacado: false, imagen: '/img/TR008_Anclaje_qu_mico_epoxi_300ml.jpg' },

  // ==================== MADERA ====================
  { id: 'MD001', nombre: 'Pino cepillado 1x3" x 3m', categoria: 'Madera', subcategoria: 'Pino cepillado', marca: 'Local', unidad: 'Unidad', precio: 4290, stock: 40, stockMinimo: 12, destacado: false, imagen: '/img/MD001_Pino_cepillado_1x3_x_3m.jpg' },
  { id: 'MD002', nombre: 'Pino cepillado 2x4" x 3m', categoria: 'Madera', subcategoria: 'Pino cepillado', marca: 'Local', unidad: 'Unidad', precio: 7490, stock: 30, stockMinimo: 10, destacado: false, imagen: '/img/MD002_Pino_cepillado_2x4_x_3m.jpg' },
  { id: 'MD003', nombre: 'Terciado estructural 18mm 1.22x2.44m', categoria: 'Madera', subcategoria: 'Tableros', marca: 'Arauco', unidad: 'Plancha', precio: 34990, stock: 20, stockMinimo: 5, destacado: true, imagen: '/img/MD003_Terciado_estructural_18mm_1_22x2_44m.jpg' },
  { id: 'MD004', nombre: 'MDF 15mm 1.22x2.44m', categoria: 'Madera', subcategoria: 'Tableros', marca: 'Arauco', unidad: 'Plancha', precio: 27990, stock: 15, stockMinimo: 4, destacado: false, imagen: '/img/MD004_MDF_15mm_1_22x2_44m.jpg' },
  { id: 'MD005', nombre: 'OSB 9mm 1.22x2.44m', categoria: 'Madera', subcategoria: 'Tableros', marca: 'Arauco', unidad: 'Plancha', precio: 18990, stock: 18, stockMinimo: 5, destacado: false, imagen: '/img/MD005_OSB_9mm_1_22x2_44m.jpg' },
  { id: 'MD006', nombre: 'Volcanita estándar 10mm 1.2x2.4m', categoria: 'Madera', subcategoria: 'Tableros', marca: 'Volcán', unidad: 'Plancha', precio: 8990, stock: 30, stockMinimo: 8, destacado: false, imagen: '/img/MD006_Volcanita_est_ndar_10mm_1_2x2_4m.jpg' },
  { id: 'MD007', nombre: 'Volcanita resistente humedad 10mm', categoria: 'Madera', subcategoria: 'Tableros', marca: 'Volcán', unidad: 'Plancha', precio: 11990, stock: 15, stockMinimo: 4, destacado: false, imagen: '/img/MD007_Volcanita_resistente_humedad_10mm.jpg' },

  // ==================== SEGURIDAD ====================
  { id: 'SE001', nombre: 'Casco seguridad blanco', categoria: 'Seguridad', subcategoria: 'EPP', marca: '3M', unidad: 'Unidad', precio: 6990, stock: 15, stockMinimo: 5, destacado: false, imagen: '/img/SE001_Casco_seguridad_blanco.jpg' },
  { id: 'SE002', nombre: 'Guantes de cuero talla L', categoria: 'Seguridad', subcategoria: 'EPP', marca: '3M', unidad: 'Par', precio: 3690, stock: 20, stockMinimo: 6, destacado: false, imagen: '/img/SE002_Guantes_de_cuero_talla_L.jpg' },
  { id: 'SE003', nombre: 'Antiparras de seguridad clear', categoria: 'Seguridad', subcategoria: 'EPP', marca: '3M', unidad: 'Unidad', precio: 2490, stock: 25, stockMinimo: 8, destacado: false, imagen: '/img/SE003_Antiparras_de_seguridad_clear.jpg' },
  { id: 'SE004', nombre: 'Mascarilla respirador N95 (caja x10)', categoria: 'Seguridad', subcategoria: 'EPP', marca: '3M', unidad: 'Caja', precio: 10990, stock: 10, stockMinimo: 3, destacado: false, imagen: '/img/SE004_Mascarilla_respirador_N95_caja_x10_.jpg' },
  { id: 'SE005', nombre: 'Arnés de seguridad 1 punto', categoria: 'Seguridad', subcategoria: 'EPP', marca: '3M', unidad: 'Unidad', precio: 34990, stock: 4, stockMinimo: 1, destacado: false, imagen: '/img/SE005_Arn_s_de_seguridad_1_punto.jpg' },

  // ==================== JARDÍN ====================
  { id: 'JA001', nombre: 'Manguera riego 3/4" x 25m', categoria: 'Jardín', subcategoria: 'Mangueras', marca: 'Tigre', unidad: 'Unidad', precio: 22990, stock: 6, stockMinimo: 2, destacado: false, imagen: '/img/JA001_Manguera_riego_3_4_x_25m.jpg' },
  { id: 'JA002', nombre: 'Manguera expandible 30m', categoria: 'Jardín', subcategoria: 'Mangueras', marca: 'Bestway', unidad: 'Unidad', precio: 28990, stock: 5, stockMinimo: 2, destacado: false, imagen: '/img/JA002_Manguera_expandible_30m.jpg' },
  { id: 'JA003', nombre: 'Pistola de riego 8 modos', categoria: 'Jardín', subcategoria: 'Mangueras', marca: 'Bestway', unidad: 'Unidad', precio: 5490, stock: 10, stockMinimo: 3, destacado: false, imagen: '/img/JA003_Pistola_de_riego_8_modos.jpg' },
  { id: 'JA004', nombre: 'Pala punta redonda #2 con mango', categoria: 'Jardín', subcategoria: 'Herramientas', marca: 'Corona', unidad: 'Unidad', precio: 10990, stock: 8, stockMinimo: 2, destacado: false, imagen: '/img/JA004_Pala_punta_redonda_2_con_mango.jpg' },
  { id: 'JA005', nombre: 'Rastrillo 16 dientes con mango', categoria: 'Jardín', subcategoria: 'Herramientas', marca: 'Corona', unidad: 'Unidad', precio: 9490, stock: 6, stockMinimo: 2, destacado: false, imagen: '/img/JA005_Rastrillo_16_dientes_con_mango.jpg' },
];

export default PRODUCTOS;