// ═══════════════════ DADOS ═══════════════════

const CONCEITOS = [
  { tag: "Categoria", t: "Espumante", d: "Nome geral dos vinhos com borbulhas. As bolhas vêm de uma segunda fermentação que retém o CO₂ na garrafa." },
  { tag: "Região", t: "Champagne", d: "Só pode receber esse nome se produzido na região de Champagne, França. Normalmente mais complexo, cremoso e elegante." },
  { tag: "Origem", t: "Prosecco", d: "Espumante italiano produzido principalmente com a uva Glera. Costuma ser mais leve, fresco e frutado que o Champagne." },
  { tag: "Estilo", t: "Brut", d: "Indica espumante ou vinho seco, com pouco açúcar residual. É o estilo mais gastronômico e versátil da carta." },
  { tag: "Estilo", t: "Demi-Sec", d: "Mais adocicado que Brut. Fácil de beber e ótimo para quem gosta de sabores mais suaves ou para acompanhar sobremesas." },
  { tag: "Cor", t: "Rosé", d: "Vinho ou espumante rosado. Normalmente apresenta aromas de frutas vermelhas, morango e framboesa. Versátil à mesa." },
  { tag: "Conceito", t: "Tanino", d: "Substância naturalmente presente nas cascas das uvas tintas. Dá estrutura, corpo e leve amargor ao vinho. Quanto mais tanino, mais encorpado." },
  { tag: "Conceito", t: "Acidez", d: "Frescor e vivacidade do vinho. Vinhos com boa acidez acompanham melhor frutos do mar, peixes e pratos gordurosos." },
  { tag: "Conceito", t: "Orgânico", d: "Vinho produzido sem agrotóxicos. Tendência crescente: Emiliana, Adobe e outros na carta são orgânicos certificados." },
  { tag: "Região", t: "DOC / DOCG", d: "Denominação italiana de origem controlada. DOCG é o nível mais alto de qualidade e origem garantida pela lei italiana." }
];

const ESPUMANTES = [
  { n: "Veuve Clicquot Brut", o: "França · Champagne", t: "champagne", e: "Champagne Brut", uva: "Pinot Noir, Chardonnay, Pinot Meunier", p: ["pão tostado", "frutas cítricas", "cremoso", "boa acidez"], h: ["ostras", "sushi", "frutos do mar", "queijos meia-cura"], nota: "Ícone premium da carta. Ideal para celebrações especiais." },
  { n: "Portal da Calçada Brut", o: "Portugal · Espumante", t: "padrao", e: "Brut", uva: "Arinto, Fernão Pires", p: ["leve", "refrescante", "frutado", "floral"], h: ["entradas", "petiscos", "saladas leves", "frutos do mar"], nota: "" },
  { n: "Miolo Cuvée Brut", o: "Brasil · Espumante", t: "padrao", e: "Brut", uva: "Chardonnay, Pinot Noir", p: ["frutas cítricas", "maçã verde", "levemente tostado"], h: ["saladas", "peixes grelhados", "queijos leves", "canapés"], nota: "Excelente custo-benefício nacional." },
  { n: "Cava Don Roman Brut Rosé", o: "Espanha · Cava", t: "rose", e: "Rosé Brut", uva: "Garnacha, Trepat", p: ["frutas vermelhas", "acidez equilibrada", "refrescante"], h: ["carpaccio", "salmão", "culinária japonesa", "prosciutto"], nota: "" },
  { n: "Chandon Passion Ice Rosé", o: "Brasil · Espumante Rosé", t: "rose", e: "Demi-Sec", uva: "Pinot Noir, Syrah", p: ["doce", "aromático", "frutas tropicais", "framboesa"], h: ["dias quentes", "cocktails", "sobremesas de frutas"], nota: "Ideal servido com gelo — estilo único." },
  { n: "Veuve Vernay Brut", o: "França · Espumante", t: "padrao", e: "Brut", uva: "Chardonnay, Pinot Noir", p: ["delicado", "elegante", "cítrico", "floral"], h: ["aperitivo", "entradas", "queijos frescos"], nota: "Excelente como aperitivo." },
  { n: "Prosecco Sperone Brut", o: "Itália · Prosecco", t: "prosecco", e: "Brut", uva: "Glera", p: ["leve", "floral", "frutado", "pera", "maçã"], h: ["brunch", "entradas", "Aperol Spritz", "frutos do mar"], nota: "Base perfeita para o Aperol Spritz." },
  { n: "Glori Zero Álcool", o: "Brasil · Sem Álcool", t: "sem-alcool", e: "Sem Álcool", uva: "Muscat", p: ["doce leve", "refrescante", "uva fresca"], h: ["qualquer ocasião", "dirigir", "gestantes"], nota: "Opção inclusiva para quem não consome álcool." }
];

const BRANCOS = {
  "Argentina 🇦🇷": [
    { n: "Altos Las Hormigas Mendoza Tierra del Fuego", o: "Argentina · Mendoza", t: "branco", e: "Branco", uva: "Malbec Blanc / Torrontés", p: ["floral", "tropicais", "frescor andino"], h: ["frutos do mar", "queijos frescos", "sushi"], nota: "", preco: "R$ 225,00" },
    { n: "Altosur Torrontes Uco Valley Sophenia", o: "Argentina · Valle de Uco", t: "branco", e: "Torrontés", uva: "Torrontés", p: ["muito aromático", "floral intenso", "maracujá", "pêssego"], h: ["frutos do mar", "sushi", "thai", "saladas"], nota: "", preco: "R$ 185,00" },
    { n: "Alfredo Roca Chardonnay Mendoza", o: "Argentina · Mendoza", t: "branco", e: "Chardonnay", uva: "Chardonnay", p: ["frutas tropicais", "maçã", "equilibrado"], h: ["peixes", "aves", "massas com molho branco"], nota: "", preco: "R$ 145,00" }
  ],
  "Chile 🇨🇱": [
    { n: "Novas Gran Reserva Sauvignon Blanc Orgânico", o: "Chile · Emiliana", t: "branco", e: "Sauvignon Blanc Orgânico", uva: "Sauvignon Blanc", p: ["cítrico", "herbáceo", "maracujá", "refrescante"], h: ["frutos do mar", "sushi", "saladas", "queijo de cabra"], nota: "", preco: "R$ 220,00" },
    { n: "Adobe Chardonnay Emiliana Orgânico", o: "Chile · Emiliana", t: "branco", e: "Chardonnay Orgânico", uva: "Chardonnay", p: ["elegante", "frutas amarelas", "leve madeira", "manteiga"], h: ["frutos do mar", "massas leves", "frango"], nota: "", preco: "R$ 185,00" },
    { n: "Tabali Pedregoso Chardonnay Vineto Epinal", o: "Chile · Vale de Limari", t: "branco", e: "Chardonnay", uva: "Chardonnay", p: ["mineral", "frutas tropicais", "toasty", "elegante"], h: ["lagosta", "vieiras", "risoto de frutos do mar"], nota: "", preco: "R$ 185,00" },
    { n: "Bisquertt Chardonnay Valle de Colchagua", o: "Chile · Colchagua", t: "branco", e: "Chardonnay", uva: "Chardonnay", p: ["frutas tropicais", "boa acidez", "leve cremosidade"], h: ["peixes", "aves", "massas brancas"], nota: "", preco: "R$ 185,00" },
    { n: "Adobe Gewürztraminer Emiliana Orgânico", o: "Chile · V.Casa Blanca", t: "branco", e: "Gewürztraminer", uva: "Gewürztraminer", p: ["lichia", "rosa", "pétalas", "adocicado"], h: ["culinária asiática", "thai", "queijo azul", "foie gras"], nota: "Aromático e exótico.", preco: "R$ 155,00" },
    { n: "Caliterra Sauvignon Blanc Aconchagua", o: "Chile · Aconchagua", t: "branco", e: "Sauvignon Blanc", uva: "Sauvignon Blanc", p: ["cítrico", "grapefruit", "ervas frescas"], h: ["frutos do mar", "saladas", "queijos leves"], nota: "", preco: "R$ 155,00" }
  ],
  "Espanha 🇪🇸": [
    { n: "Borsão Classico Macabeo Bodegas Borsão", o: "Espanha", t: "branco", e: "Macabeo", uva: "Macabeo", p: ["fresco", "frutado", "floral", "delicado"], h: ["frutos do mar", "tapas", "queijos frescos"], nota: "", preco: "R$ 175,00" },
    { n: "Pata Negra Verdejo Rueda", o: "Espanha · Rueda", t: "branco", e: "Verdejo", uva: "Verdejo", p: ["cítrico", "herbal", "amêndoa", "mineral"], h: ["mariscos", "peixes", "tapas espanholas"], nota: "", preco: "R$ 169,00" }
  ],
  "Brasil 🇧🇷": [
    { n: "Miolo Giuseppe Chardonnay", o: "Brasil · Vale dos Vinhedos", t: "branco", e: "Chardonnay", uva: "Chardonnay", p: ["elegante", "manteiga", "baunilha", "frutas tropicais"], h: ["lagosta", "camarão", "risoto", "frango à moda"], nota: "Top da linha Miolo.", preco: "R$ 219,00" },
    { n: "Unus Moscato Giallo", o: "Brasil · Flores da Cunha RS", t: "branco", e: "Moscato", uva: "Moscato Giallo", p: ["doce", "floral", "pêssego", "bergamota"], h: ["sobremesas", "frutas", "queijos frescos"], nota: "", preco: "R$ 199,00" },
    { n: "Miolo Reserva Sauvignon Blanc", o: "Brasil · Campanha", t: "branco", e: "Sauvignon Blanc", uva: "Sauvignon Blanc", p: ["cítrico", "tropical", "refrescante"], h: ["saladas", "peixes", "frutos do mar leves"], nota: "", preco: "R$ 169,00" },
    { n: "Miolo Reserva Chardonnay", o: "Brasil · Campanha", t: "branco", e: "Chardonnay", uva: "Chardonnay", p: ["frutas tropicais", "manteiga leve", "boa acidez"], h: ["massas brancas", "peixes", "frango"], nota: "", preco: "R$ 169,00" }
  ],
  "Itália 🇮🇹": [
    { n: "Corbelli Pinot Grigio Terre Sicilane", o: "Itália · Sicília", t: "branco", e: "Pinot Grigio", uva: "Pinot Grigio", p: ["delicado", "floral", "limão", "frescor"], h: ["frutos do mar", "peixes", "aperitivo"], nota: "", preco: "R$ 185,00" },
    { n: "Via Della Piana Fiano Bianco IGT Puglia", o: "Itália · Puglia", t: "branco", e: "Fiano", uva: "Fiano", p: ["amendoado", "mel", "figos secos", "mineral"], h: ["peixes gordos", "polvo", "queijo pecorino"], nota: "", preco: "R$ 290,00" },
    { n: "Fontenutta Pinot Grigio IGT", o: "Itália", t: "branco", e: "Pinot Grigio", uva: "Pinot Grigio", p: ["leve", "floral", "cítrico", "refrescante"], h: ["aperitivo", "frutos do mar", "saladas"], nota: "", preco: "R$ 185,00" },
    { n: "Borgo Torre Pecorino Abruzzo", o: "Itália · Abruzzo", t: "branco", e: "Pecorino", uva: "Pecorino", p: ["floral", "pêssego", "mineral", "acidez viva"], h: ["peixes", "camarão", "massas com frutos do mar"], nota: "Uva autóctone italiana.", preco: "R$ 185,00" }
  ],
  "Portugal 🇵🇹": [
    { n: "Varanda du Conde Alvarinho Vinho Verde", o: "Portugal · Provam · Alvarinho de Monção", t: "branco", e: "Alvarinho", uva: "Alvarinho", p: ["muito fresco", "cítrico", "mineral", "efervescente leve"], h: ["frutos do mar", "peixes", "sushi", "mariscos"], nota: "Clássico do Minho.", preco: "R$ 196,00" },
    { n: "Tons Duorum Verdejo Douro", o: "Portugal · Douro · Vinhos S.A", t: "branco", e: "Verdejo", uva: "Verdejo", p: ["fresco", "cítrico", "mineral", "herbal"], h: ["aperitivo", "frutos do mar", "tapas"], nota: "", preco: "R$ 162,00" },
    { n: "Reguengos Alentejo D.O.C Carmim", o: "Portugal · Alentejo", t: "branco", e: "Branco Alentejano", uva: "Roupeiro, Antão Vaz", p: ["frutado", "encorpado", "frutas amarelas"], h: ["aves", "massas", "queijos curados"], nota: "", preco: "R$ 195,00" },
    { n: "Val do Ucha Vinho Verde", o: "Portugal · Val da Ucha · Arcos de Valdevez", t: "branco", e: "Vinho Verde", uva: "Loureiro, Trajadura", p: ["fresco", "leve", "cítrico", "levemente efervescente"], h: ["mariscos", "frutos do mar", "saladas", "sushi"], nota: "", preco: "R$ 148,00" }
  ],
  "Austrália 🇦🇺": [
    { n: "Long Row Chardonnay Vale Mclarem Angove", o: "Austrália · Vale de Mclaren", t: "branco", e: "Chardonnay", uva: "Chardonnay", p: ["frutas tropicais", "leve carvalho", "cremoso"], h: ["aves", "massas cremosas", "peixes"], nota: "", preco: "R$ 220,00" },
    { n: "Long Row Riesling Vale Mclarem Angove", o: "Austrália · Vale de Mclaren", t: "branco", e: "Riesling", uva: "Riesling", p: ["cítrico", "pétreo", "acidez vibrante", "floral"], h: ["culinária asiática", "frutos do mar", "sushi"], nota: "", preco: "R$ 220,00" }
  ]
};

const TINTOS = {
  "Argentina 🇦🇷": [
    { n: "Norton Select Cabernet Sauvignon Mendoza", o: "Argentina · Mendoza · Casa Flora", t: "padrao", e: "Cabernet Sauvignon", uva: "Cabernet Sauvignon", p: ["ameixa", "especiarias", "taninos presentes", "encorpado"], h: ["carnes vermelhas", "churrasco", "hambúrguer artesanal", "costela"], nota: "", preco: "R$ 189,00" },
    { n: "Norton Select Pinot Noir Mendoza", o: "Argentina · Mendoza · Casa Flora", t: "leve", e: "Pinot Noir", uva: "Pinot Noir", p: ["cereja", "morango", "delicado", "taninos baixos"], h: ["massas leves", "frios", "queijos", "salmão"], nota: "", preco: "R$ 189,00" },
    { n: "Norton Select Malbec Mendoza", o: "Argentina · Mendoza · Casa Flora", t: "padrao", e: "Malbec", uva: "Malbec", p: ["ameixa", "violeta", "chocolate", "taninos suaves"], h: ["carnes assadas", "hambúrguer", "queijos curados"], nota: "Malbec clássico argentino.", preco: "R$ 189,00" },
    { n: "Miolo Seleção Malbec/Bonarda Mendoza", o: "Argentina · Mendoza", t: "padrao", e: "Malbec/Bonarda", uva: "Malbec, Bonarda", p: ["frutado", "macio", "boa estrutura", "ameixas"], h: ["massas com molho", "carnes médias", "embutidos"], nota: "", preco: "R$ 179,00" },
    { n: "Alfredo Roca Fincas Pinot Noir Mendoza", o: "Argentina · Mendoza · San Rafael", t: "leve", e: "Pinot Noir", uva: "Pinot Noir", p: ["leve", "cereja", "framboesa", "elegante"], h: ["massas leves", "peixe", "frios"], nota: "", preco: "R$ 149,00" }
  ],
  "Chile 🇨🇱": [
    { n: "Salvaje Vinho Orgânico Emiliana Syrah", o: "Chile · V.Casa Blanca", t: "padrao", e: "Syrah Orgânico", uva: "Syrah", p: ["pimenta", "olive negra", "especiarias", "encorpado"], h: ["carnes assadas", "cordeiro", "queijos curados", "charcutaria"], nota: "Orgânico de alto nível.", preco: "R$ 220,00" },
    { n: "Caliterra Cabernet Sauvignon Reserva", o: "Chile · Aconchagua Vale D.O", t: "padrao", e: "Cabernet Sauvignon", uva: "Cabernet Sauvignon", p: ["cassis", "ameixa", "taninos firmes", "especiarias"], h: ["carnes vermelhas", "churrasco", "hambúrguer"], nota: "", preco: "R$ 145,00" },
    { n: "Caliterra Carmenere Reserva Aconchagua", o: "Chile · Aconchagua", t: "padrao", e: "Carmenère", uva: "Carmenère", p: ["pimentão verde", "ameixa", "especiarias", "macio"], h: ["massas com molho", "carnes médias", "queijos"], nota: "Uva símbolo do Chile.", preco: "R$ 145,00" },
    { n: "Coyam Orgânico Emiliana Valle de Colchagua", o: "Chile · Colchagua", t: "padrao", e: "Blend Orgânico Premium", uva: "Syrah, Carmenère, Merlot, Cabernet Sauvignon", p: ["complexo", "frutas escuras", "terroso", "especiado", "elegante"], h: ["cordeiro", "carnes nobres", "queijos curados", "pato"], nota: "Um dos melhores orgânicos do Chile.", preco: "R$ 420,00" },
    { n: "Adobe Reserva Carmenere Emiliana Orgânico", o: "Chile", t: "padrao", e: "Carmenère Orgânico", uva: "Carmenère", p: ["pimentão", "ameixa", "macio", "herbáceo"], h: ["massas", "carnes médias", "hambúrguer"], nota: "", preco: "R$ 200,00" },
    { n: "Bisquertt Cabernet Sauvignon Reserva", o: "Chile", t: "padrao", e: "Cabernet Sauvignon", uva: "Cabernet Sauvignon", p: ["cassis", "ameixa", "taninos médios", "encorpado"], h: ["carnes vermelhas", "churrasco", "pizzas"], nota: "", preco: "R$ 189,00" },
    { n: "Bisquertt Merlot Reserva", o: "Chile", t: "padrao", e: "Merlot", uva: "Merlot", p: ["frutas vermelhas", "chocolate", "macio", "aveludado"], h: ["massas com molho", "carnes médias", "queijos"], nota: "", preco: "R$ 189,00" },
    { n: "El Raco Cabernet Sauvignon", o: "Chile", t: "padrao", e: "Cabernet Sauvignon", uva: "Cabernet Sauvignon", p: ["cassis", "especiarias", "taninos presentes"], h: ["carnes vermelhas", "churrasco", "costela"], nota: "", preco: "R$ 199,00" }
  ],
  "Austrália 🇦🇺": [
    { n: "Long Row Shiraz Vale Maclarem Angove", o: "Austrália · Vale de Maclaren", t: "padrao", e: "Shiraz", uva: "Shiraz (Syrah)", p: ["pimenta", "frutas escuras", "especiarias", "encorpado", "defumado"], h: ["churrasco", "carnes grelhadas", "costela", "cordeiro"], nota: "Shiraz australiano típico: potente e especiado.", preco: "R$ 220,00" }
  ],
  "Espanha 🇪🇸": [
    { n: "Pata Negra Toro Roble Valdepeñas", o: "Espanha", t: "padrao", e: "Tinto Roble", uva: "Tempranillo", p: ["frutas vermelhas", "carvalho suave", "especiarias", "equilibrado"], h: ["tapas", "embutidos", "carnes assadas", "queijos curados"], nota: "", preco: "R$ 179,00" }
  ],
  "Moldávia 🇲🇩": [
    { n: "Moldova Tyr Malbec Rara Neagra", o: "Moldávia", t: "padrao", e: "Malbec / Rara Neagra", uva: "Malbec, Rara Neagra", p: ["ameixa", "terroso", "especiado", "taninos presentes"], h: ["carnes grelhadas", "hambúrguer", "queijos curados"], nota: "Rara Neagra é uva autóctone moldava — raridade na carta.", preco: "R$ 169,00" }
  ],
  "Portugal 🇵🇹": [
    { n: "Val do Ucha Dao DOC", o: "Portugal · Val da Ucha · Arcos de Valdevez", t: "padrao", e: "Dão DOC", uva: "Touriga Nacional, Jaen, Alfrocheiro", p: ["frutas vermelhas", "floral", "elegante", "boa acidez"], h: ["aves", "massas", "queijos semi-curados", "bacalhau"], nota: "", preco: "R$ 148,00" },
    { n: "Loios Alentajano Portugal Ramos", o: "Portugal · Alentejo", t: "padrao", e: "Alentejano", uva: "Aragonez, Trincadeira, Alicante Bouschet", p: ["frutas escuras", "especiarias", "encorpado", "caloroso"], h: ["carnes assadas", "cordeiro", "cozido alentejano"], nota: "", preco: "R$ 159,00" }
  ],
  "Uruguai 🇺🇾": [
    { n: "Elegido Reserva Cabernet/Tannat/Merlot", o: "Uruguai · C. Montes Toscanini", t: "padrao", e: "Blend Reserva", uva: "Cabernet Sauvignon, Tannat, Merlot", p: ["encorpado", "robusto", "frutas escuras", "taninos presentes"], h: ["churrasco", "carnes grelhadas", "costela", "cordeiro"], nota: "Tannat é a uva símbolo do Uruguai.", preco: "R$ 169,00" }
  ],
  "Itália 🇮🇹": [
    { n: "Luccarelli Primitivo Di Manduria D.O.C", o: "Itália · Puglia", t: "padrao", e: "Primitivo DOC", uva: "Primitivo (Zinfandel)", p: ["ameixa", "frutas escuras", "especiarias", "encorpado", "alcoólico"], h: ["carnes grelhadas", "churrasco", "queijos curados", "pasta ragu"], nota: "Primitivo = Zinfandel californiano.", preco: "R$ 355,00" },
    { n: "Luccarelli Primitivo Puglia", o: "Itália · Puglia", t: "padrao", e: "Primitivo", uva: "Primitivo", p: ["frutas escuras", "taninos macios", "especiados", "caloroso"], h: ["massas com molho de carne", "pizza", "embutidos"], nota: "", preco: "R$ 270,00" },
    { n: "IL Casello Cabernet Sauvignon", o: "Itália", t: "padrao", e: "Cabernet Sauvignon", uva: "Cabernet Sauvignon", p: ["cassis", "especiarias", "estruturado", "taninos firmes"], h: ["carnes vermelhas", "costela", "queijos curados"], nota: "", preco: "R$ 270,00" },
    { n: "Chianti Gonfalone Trambusti DOCG", o: "Itália · Toscana · Chianti DOCG", t: "padrao", e: "Chianti DOCG", uva: "Sangiovese", p: ["cereja", "acidez viva", "herbal", "terroso", "elegante"], h: ["pizza", "massas com tomate", "bisteca", "prosciutto"], nota: "Chianti é sinônimo de Toscana.", preco: "R$ 220,00" },
    { n: "Fontenutta Montepulciano Dabruzzo DOC", o: "Itália · Abruzzo", t: "padrao", e: "Montepulciano d'Abruzzo DOC", uva: "Montepulciano", p: ["frutas vermelhas", "taninos macios", "encorpado", "rústico"], h: ["massas", "carnes", "pizza", "embutidos"], nota: "", preco: "R$ 220,00" }
  ],
  "Brasil 🇧🇷": [
    { n: "Miolo Seleção Cabernet Sauvignon Campanha", o: "Brasil · Campanha Gaúcha", t: "padrao", e: "Cabernet Sauvignon", uva: "Cabernet Sauvignon", p: ["ameixa", "especiarias", "taninos médios", "encorpado"], h: ["carnes vermelhas", "churrasco", "hambúrguer"], nota: "", preco: "R$ 169,00" },
    { n: "Miolo Seleção Merlot Campanha", o: "Brasil · Campanha Gaúcha", t: "padrao", e: "Merlot", uva: "Merlot", p: ["macio", "frutas vermelhas", "taninos suaves", "fácil de beber"], h: ["massas", "carnes leves", "queijos", "frios"], nota: "Ótimo para iniciantes.", preco: "R$ 169,00" },
    { n: "Miolo Seleção Malbec Campanha", o: "Brasil · Campanha Gaúcha", t: "padrao", e: "Malbec", uva: "Malbec", p: ["ameixa", "violeta", "frutado", "macio"], h: ["carnes assadas", "churrasco", "queijos curados"], nota: "", preco: "R$ 169,00" }
  ]
};

const ROSES = [
  { n: "Niederburg Classic Rosé", o: "África do Sul", uva: "Pinotage, Merlot", p: ["morango", "frutas vermelhas", "refrescante", "fácil de beber"], h: ["salmão", "frutos do mar", "saladas", "culinária leve"], nota: "" },
  { n: "Caliterra Rosé", o: "Chile", uva: "Cabernet Sauvignon", p: ["equilibrado", "floral", "leve mineralidade", "frutas vermelhas"], h: ["salmão", "carpaccio", "massas leves", "aves"], nota: "" },
  { n: "Bisquertt Rosé Reserva", o: "Chile", uva: "Cabernet Sauvignon", p: ["elegante", "frutas vermelhas maduras", "boa acidez"], h: ["culinária japonesa", "salmão", "pizza de queijo", "tapas"], nota: "" },
  { n: "Taís Rosé Orgânico – Emiliana", o: "Chile · Orgânico", uva: "Syrah", p: ["fresco", "leve", "floral", "morangos silvestres"], h: ["saladas", "massas leves", "frutos do mar", "aperitivo"], nota: "Orgânico certificado." },
  { n: "J. Bouchon Reserva Rosé", o: "Chile · Vale do Maule", uva: "Merlot, Cabernet", p: ["frutas vermelhas", "toque floral", "elegante", "boa estrutura"], h: ["carpaccio", "prosciutto", "massas", "aves"], nota: "" },
  { n: "Unus Merlot/Rosé", o: "Brasil · Flores da Cunha RS", uva: "Merlot", p: ["frutado", "macio", "refrescante", "morango"], h: ["aperitivo", "saladas", "massas leves", "queijos"], nota: "" },
  { n: "Cava Don Roman Brut Rosé", o: "Espanha · Cava (Espumante)", uva: "Garnacha, Trepat", p: ["borbulhas finas", "morango", "acidez viva"], h: ["sushi", "carpaccio", "entradas", "prosciutto"], nota: "Espumante rosé." },
  { n: "Chandon Passion Ice Rosé", o: "Brasil · Espumante Rosé", uva: "Pinot Noir, Syrah", p: ["tropical", "doce", "framboesa", "exótico"], h: ["drinks com gelo", "sobremesas", "dias quentes"], nota: "Servir com gelo." }
];

const HARM = [
  { b: "Champagne / Espumante Brut", c: "Ostras, sushi, frutos do mar, queijos leves, carpaccio", d: "Acidez alta limpa o paladar — perfeito com gordura e salinidade" },
  { b: "Espumante Demi-Sec", c: "Sobremesas de frutas, bolos, queijos cremosos", d: "O açúcar equilibra a doçura das sobremesas" },
  { b: "Prosecco", c: "Aperitivo, entradas, Aperol Spritz, prosciutto", d: "Leveza e borbulhas suaves combinam com o estilo aperitivo" },
  { b: "Rosé (vinho e espumante)", c: "Salmão, culinária japonesa, carpaccio, saladas, prosciutto", d: "Versatilidade é o ponto forte — funciona do aperitivo à sobremesa" },
  { b: "Chardonnay", c: "Massas com molho branco, peixes, frango, frutos do mar, lagosta", d: "Acidez e cremosidade equilibram pratos mais gordurosos" },
  { b: "Sauvignon Blanc", c: "Saladas, frutos do mar, sushi, queijo de cabra, culinária thai", d: "Herbal e cítrico: corta gorduras e realça frescor dos pratos" },
  { b: "Alvarinho / Vinho Verde", c: "Mariscos, frutos do mar, sushi, peixe grelhado", d: "Alta acidez e efervescência natural combinam com o mar" },
  { b: "Pinot Grigio", c: "Aperitivo, frutos do mar, peixes delicados, saladas", d: "Vinho neutro: não compete com sabores delicados" },
  { b: "Riesling", c: "Culinária asiática, sushi, frutos do mar, queijo azul", d: "Doçura e acidez equilibram picância e umami" },
  { b: "Gewürztraminer", c: "Culinária thai, indiana, queijo azul, foie gras", d: "Aromas exóticos (lichia, rosa) combinam com especiarias intensas" },
  { b: "Cabernet Sauvignon", c: "Carnes vermelhas, churrasco, hambúrguer, costela, queijos curados", d: "Taninos firmes cortam a gordura da carne — combinação clássica" },
  { b: "Malbec", c: "Carnes assadas, churrasco, hambúrguer, embutidos", d: "Taninos macios e frutado intenso completam o sabor da carne" },
  { b: "Merlot", c: "Massas com molho, carnes médias, queijos, frios", d: "Maciez e frutalidade: ideal para iniciantes e pratos versáteis" },
  { b: "Pinot Noir", c: "Massas leves, peixe, salmão, frios, queijos", d: "Único tinto que harmoniza com peixes mais gordurosos" },
  { b: "Syrah / Shiraz", c: "Churrasco, carnes grelhadas, cordeiro, queijos curados", d: "Pimenta e especiarias complementam carnes com sabor intenso" },
  { b: "Carmenère", c: "Massas, carnes médias, hambúrguer, queijos", d: "Pimentão suave da uva combina muito com molhos encorpados" },
  { b: "Sangiovese / Chianti", c: "Pizza, massas com molho de tomate, bisteca, prosciutto", d: "Alta acidez clássica italiana combina naturalmente com tomate" },
  { b: "Primitivo / Zinfandel", c: "Churrasco, massas com ragú, pizza, embutidos", d: "Uva encorpada: funciona com sabores fortes e defumados" },
  { b: "Tannat", c: "Churrasco, cordeiro, carnes grelhadas intensas", d: "Uva mais tânica do mundo: precisa de carnes ricas para equilibrar" }
];

const UVAS = [
  { u: "Chardonnay", t: "Branco", c: "Amanteigado, elegante, frutas tropicais e amarelas. Pode ser leve (sem carvalho) ou encorpado (com barricas).", ps: "França, Argentina, Chile, Brasil, Austrália, Itália" },
  { u: "Sauvignon Blanc", t: "Branco", c: "Cítrico, herbáceo, maracujá, grapefruit. Muito refrescante e de boa acidez.", ps: "França, Chile, Nova Zelândia, Brasil" },
  { u: "Pinot Grigio", t: "Branco", c: "Delicado, floral, limão, neutro. Perfeito para aperitivo e pratos delicados.", ps: "Itália, França, Alemanha" },
  { u: "Alvarinho", t: "Branco", c: "Muito fresco, cítrico, mineral, leve efervescência. Símbolo do Vinho Verde português.", ps: "Portugal" },
  { u: "Riesling", t: "Branco", c: "Cítrico, pétreo, alta acidez, floral. Pode ser seco a muito doce. Combina com culinária asiática.", ps: "Alemanha, Austrália, Alsácia" },
  { u: "Gewürztraminer", t: "Branco Aromático", c: "Lichia, rosa, pétalas de flor. Muito aromático e exótico.", ps: "Alsácia, Chile, Argentina" },
  { u: "Torrontés", t: "Branco Aromático", c: "Muito floral, maracujá, pêssego. Uva símbolo da Argentina branca.", ps: "Argentina" },
  { u: "Verdejo", t: "Branco", c: "Cítrico, herbal, amêndoa, mineral. Típico de Rueda, Espanha.", ps: "Espanha, Portugal" },
  { u: "Moscato / Muscat", t: "Branco Doce", c: "Muito doce, floral, pêssego, bergamota. Baixo álcool, refrescante.", ps: "Itália, Brasil, Espanha" },
  { u: "Glera", t: "Branco — Prosecco", c: "Leve, floral, frutado, pêra e maçã. Base exclusiva do Prosecco italiano.", ps: "Itália" },
  { u: "Cabernet Sauvignon", t: "Tinto", c: "Forte e estruturado, ameixa, cassis, especiarias, taninos marcantes.", ps: "França, Chile, Argentina, Brasil, Itália" },
  { u: "Merlot", t: "Tinto", c: "Macio, frutado, taninos suaves. Ótimo para iniciantes e muito versátil.", ps: "França, Chile, Brasil, Itália" },
  { u: "Pinot Noir", t: "Tinto Leve", c: "Delicado, cereja, morango, taninos baixos. Único tinto que harmoniza com peixes.", ps: "França, Argentina, Chile" },
  { u: "Malbec", t: "Tinto", c: "Ameixa, violeta, chocolate, taninos macios. Uva símbolo da Argentina.", ps: "Argentina, Chile, França" },
  { u: "Syrah / Shiraz", t: "Tinto", c: "Pimenta preta, frutas escuras, especiarias, defumado. Potente e encorpado.", ps: "França, Austrália, Chile" },
  { u: "Carmenère", t: "Tinto", c: "Pimentão verde, ameixa, especiarias, macio. Uva símbolo do Chile.", ps: "Chile" },
  { u: "Sangiovese", t: "Tinto", c: "Cereja, acidez viva, herbal, terroso. Base do Chianti italiano.", ps: "Itália" },
  { u: "Primitivo", t: "Tinto", c: "Ameixa, frutas escuras, especiadas, encorpado. Mesmo que o Zinfandel americano.", ps: "Itália (Puglia)" },
  { u: "Tannat", t: "Tinto Robusto", c: "Uva mais tânica do mundo. Frutas escuras, estrutura máxima. Símbolo do Uruguai.", ps: "Uruguai, França" },
  { u: "Tempranillo", t: "Tinto", c: "Frutas vermelhas, couro, tabaco, carvalho. Uva símbolo da Espanha.", ps: "Espanha" },
  { u: "Rara Neagra", t: "Tinto", c: "Uva autóctone moldava. Frutas escuras, terroso, especiado.", ps: "Moldávia" },
  { u: "Touriga Nacional", t: "Tinto", c: "Floral, encorpado, taninos presentes. A principal uva nobre de Portugal.", ps: "Portugal" }
];

const PAISES = [
  { p: "França 🇫🇷", d: "Champagne — espumante mais sofisticado do mundo. Borgonha (Pinot Noir, Chardonnay). Alsácia (aromáticos)." },
  { p: "Itália 🇮🇹", d: "Chianti DOCG (Sangiovese), Primitivo (Puglia), Pinot Grigio, Pecorino, Fiano. Alta diversidade de uvas autóctones." },
  { p: "Espanha 🇪🇸", d: "Cava (espumante), Tempranillo, Verdejo, Macabeo. Vinhos equilibrados e gastronômicos." },
  { p: "Portugal 🇵🇹", d: "Vinhos Verdes (Alvarinho), Dão, Alentejo, grandes tintos com Touriga Nacional." },
  { p: "Argentina 🇦🇷", d: "Malbec (símbolo nacional), Cabernet Sauvignon, Torrontés branco. Mendoza é a grande região." },
  { p: "Chile 🇨🇱", d: "Carmenère (uva símbolo), Cabernet Sauvignon, vinhos orgânicos Emiliana. Melhor custo-benefício." },
  { p: "Brasil 🇧🇷", d: "Serra Gaúcha e Campanha Gaúcha. Miolo lidera a qualidade nacional. Moscato Giallo exclusivo." },
  { p: "Austrália 🇦🇺", d: "Shiraz encorpado e especiado (Vale de McLaren). Chardonnay e Riesling de alta qualidade." },
  { p: "Uruguai 🇺🇾", d: "Tannat (uva símbolo) — vinho robusto e estruturado. Pequena produção, alta qualidade." },
  { p: "Moldávia 🇲🇩", d: "País com tradição milenar em vinhos. Rara Neagra é uva autóctone exclusiva." }
];

const FLASH = [
  { f: "Brut", v: "Espumante seco, pouco açúcar. O estilo mais gastronômico e versátil." },
  { f: "Demi-Sec", v: "Mais adocicado que Brut. Ideal para sobremesas e frutas." },
  { f: "Champagne", v: "Produzido somente em Champagne, França. Mais complexo e cremoso." },
  { f: "Prosecco", v: "Espumante italiano da uva Glera. Leve, floral e frutado." },
  { f: "Chardonnay", v: "Uva branca. Amanteigado, frutas tropicais, boa acidez." },
  { f: "Merlot", v: "Tinto macio, frutas vermelhas, taninos suaves. Ótimo para iniciantes." },
  { f: "Cabernet Sauvignon", v: "Tinto forte. Ameixa, especiarias, taninos marcantes. Carnes vermelhas." },
  { f: "Pinot Noir", v: "Tinto leve. Cereja, taninos baixos. Harmoniza até com peixes." },
  { f: "Malbec", v: "Tinto argentino. Ameixa, violeta, macio. Churrasco e carnes." },
  { f: "Carmenère", v: "Tinto símbolo do Chile. Pimentão, ameixa, especiarias." },
  { f: "Syrah / Shiraz", v: "Tinto encorpado. Pimenta preta, frutas escuras, defumado." },
  { f: "Tanino", v: "Dá estrutura e amargor ao tinto. Quanto mais tanino, mais encorpado." },
  { f: "Alvarinho", v: "Uva do Vinho Verde português. Fresco, cítrico, mineral." },
  { f: "Sangiovese", v: "Base do Chianti italiano. Cereja, acidez viva, terroso." },
  { f: "Primitivo", v: "Uva italiana = Zinfandel americano. Encorpado, frutado, especiado." },
  { f: "Tannat", v: "Uva mais tânica do mundo. Símbolo do Uruguai. Carnes intensas." },
  { f: "Rara Neagra", v: "Uva autóctone da Moldávia. Raridade na carta do Maraô." },
  { f: "DOC / DOCG", v: "Denominação italiana de origem controlada. DOCG é o mais alto nível de qualidade." },
  { f: "Orgânico", v: "Vinho sem agrotóxicos. Adobe, Emiliana, Novas e Taís são orgânicos na carta." },
  { f: "Cava", v: "Espumante espanhol. Mais seco e estruturado que o Prosecco." }
];

const QUIZ = [
  { q: "O que significa 'Brut' em um espumante?", opts: ["Muito doce", "Seco, com pouco açúcar residual", "Sem álcool", "Produzido na França"], ans: 1 },
  { q: "Qual espumante só pode receber esse nome se produzido na região homônima da França?", opts: ["Prosecco", "Cava", "Champagne", "Chandon"], ans: 2 },
  { q: "A uva Glera é a base de qual espumante?", opts: ["Champagne", "Cava", "Espumante brasileiro", "Prosecco"], ans: 3 },
  { q: "Qual vinho harmoniza melhor com carnes vermelhas e churrasco?", opts: ["Chardonnay", "Pinot Noir", "Cabernet Sauvignon", "Prosecco Brut"], ans: 2 },
  { q: "Qual é a uva símbolo do Chile presente no cardápio?", opts: ["Malbec", "Tannat", "Carmenère", "Rara Neagra"], ans: 2 },
  { q: "O Coyam Orgânico do Chile custa R$ 420,00 e é um blend de quantas uvas?", opts: ["2", "3", "4", "5"], ans: 2 },
  { q: "Qual uva é símbolo do Uruguai e está presente na carta?", opts: ["Malbec", "Tannat", "Primitivo", "Merlot"], ans: 1 },
  { q: "O Primitivo italiano é a mesma uva que qual vinho americano famoso?", opts: ["Merlot", "Pinot Noir", "Zinfandel", "Cabernet Franc"], ans: 2 },
  { q: "Qual vinho do cardápio harmoniza melhor com culinária asiática e sushi?", opts: ["Cabernet Sauvignon", "Riesling / Sauvignon Blanc", "Malbec", "Primitivo"], ans: 1 },
  { q: "Qual é a uva autóctone exclusiva da Moldávia presente na carta?", opts: ["Tannat", "Sangiovese", "Rara Neagra", "Bonarda"], ans: 2 },
  { q: "O Chandon Passion Ice Rosé deve ser servido como?", opts: ["Puro gelado", "Com gelo", "Em temperatura ambiente", "Quente"], ans: 1 },
  { q: "Qual país tem o vinho mais caro do cardápio de tintos?", opts: ["Argentina", "Chile", "Itália", "Austrália"], ans: 2 }
];

const RESUMO = [
  { t: "Estilos Espumante", its: ["Brut = seco", "Demi-Sec = mais doce", "Extra Brut = muito seco", "Nature = sem adição"] },
  { t: "Espumantes por País", its: ["França → Champagne", "Itália → Prosecco", "Espanha → Cava", "Brasil → custo-benefício"] },
  { t: "Uvas Tintas", its: ["Cabernet = forte/tanino", "Merlot = macio", "Pinot Noir = leve", "Malbec = argentino", "Syrah = especiado", "Carmenère = chileno"] },
  { t: "Uvas Brancas", its: ["Chardonnay = elegante", "Sauvignon = cítrico", "Alvarinho = vinho verde", "Riesling = pétreo", "Pinot Grigio = neutro"] },
  { t: "Harmonização", its: ["Brut → frutos do mar", "Rosé → salmão/japonês", "Cabernet → carne", "Chardonnay → peixe", "Pinot Noir → massas leves"] },
  { t: "Países Destaque", its: ["Argentina → Malbec", "Chile → Carmenère + orgânicos", "Portugal → Alvarinho", "Itália → Chianti/Primitivo", "Uruguai → Tannat"] }
];

// ═══════════════════ RENDER ═══════════════════

function pills(arr) { return arr.map(p => `<span class="pill">${p}</span>`).join('') }

function wCard(x) {
  return `<div class="wc" data-t="${x.t || 'padrao'}">
    <div class="wo">${x.o}</div>
    <div class="wn">${x.n}</div>
    ${x.uva ? `<div class="wuva">🍇 ${x.uva}</div>` : ''}
    <span class="wb">${x.e}</span>
    ${x.preco ? `<div class="wprice">${x.preco}</div>` : ''}
    <div class="wd">
      <div class="wr"><span class="wl">Perfil</span><div class="pills">${pills(x.p)}</div></div>
      ${x.h && x.h.length ? `<div class="wr"><span class="wl">Harmoniza</span><div class="pills">${pills(x.h)}</div></div>` : ''}
      ${x.nota ? `<div class="wnota">${x.nota}</div>` : ''}
    </div>
  </div>`
}

// Conceitos
document.getElementById('gc').innerHTML = CONCEITOS.map(c => `
  <div class="cc">
    <div class="ctag">${c.tag}</div>
    <h3>${c.t}</h3>
    <p>${c.d}</p>
  </div>`).join('');

// Espumantes com filtro
const espTipos = ['todos', 'champagne', 'prosecco', 'rose', 'sem-alcool', 'padrao'];
const espLabels = { todos: 'Todos', champagne: 'Champagne', prosecco: 'Prosecco', rose: 'Rosé', padrao: 'Brut/Outros', 'sem-alcool': 'Sem Álcool' };
let filtroEsp = 'todos';
document.getElementById('filtros-esp').innerHTML = espTipos.map(t => `<button class="fbtn${t === filtroEsp ? ' ativo' : ''}" data-tipo="${t}">${espLabels[t]}</button>`).join('');
function renderEsp() {
  const f = filtroEsp;
  const lista = f === 'todos' ? ESPUMANTES : ESPUMANTES.filter(x => x.t === f);
  document.getElementById('ge').innerHTML = lista.map(v => wCard(v)).join('');
}
renderEsp();
document.getElementById('filtros-esp').addEventListener('click', e => {
  const btn = e.target.closest('.fbtn');
  if (!btn) return;
  filtroEsp = btn.dataset.tipo;
  document.querySelectorAll('#filtros-esp .fbtn').forEach(b => b.classList.toggle('ativo', b === btn));
  renderEsp();
});

// Vinhos Brancos por país com filtro
const paisesB = Object.keys(BRANCOS);
let filtroBra = 'todos';
const filtBraEl = document.getElementById('filtros-bra');
filtBraEl.innerHTML = `<button class="fbtn ativo" data-pais="todos">Todos</button>` +
  paisesB.map(p => `<button class="fbtn" data-pais="${p}">${p}</button>`).join('');
function renderBrancos() {
  const container = document.getElementById('brancos-container');
  const paises = filtroBra === 'todos' ? paisesB : [filtroBra];
  container.innerHTML = paises.map(pais => `
    <div class="pais-section">
      <div class="pais-title">${pais}</div>
      <div class="gw">${BRANCOS[pais].map(v => wCard(v)).join('')}</div>
    </div>`).join('');
}
renderBrancos();
filtBraEl.addEventListener('click', e => {
  const btn = e.target.closest('.fbtn');
  if (!btn) return;
  filtroBra = btn.dataset.pais;
  document.querySelectorAll('#filtros-bra .fbtn').forEach(b => b.classList.toggle('ativo', b === btn));
  renderBrancos();
});

// Vinhos Tintos por país com filtro
const paisesT = Object.keys(TINTOS);
let filtroTin = 'todos';
const filtTinEl = document.getElementById('filtros-tin');
filtTinEl.innerHTML = `<button class="fbtn ativo" data-pais="todos">Todos</button>` +
  paisesT.map(p => `<button class="fbtn" data-pais="${p}">${p}</button>`).join('');
function renderTintos() {
  const container = document.getElementById('tintos-container');
  const paises = filtroTin === 'todos' ? paisesT : [filtroTin];
  container.innerHTML = paises.map(pais => `
    <div class="pais-section">
      <div class="pais-title">${pais}</div>
      <div class="gw">${TINTOS[pais].map(v => wCard(v)).join('')}</div>
    </div>`).join('');
}
renderTintos();
filtTinEl.addEventListener('click', e => {
  const btn = e.target.closest('.fbtn');
  if (!btn) return;
  filtroTin = btn.dataset.pais;
  document.querySelectorAll('#filtros-tin .fbtn').forEach(b => b.classList.toggle('ativo', b === btn));
  renderTintos();
});

// Rosés
document.getElementById('gr').innerHTML = ROSES.map(v => `
  <div class="wc" data-t="rose">
    <div class="wo">${v.o}</div>
    <div class="wn">${v.n}</div>
    <div class="wuva">🍇 ${v.uva}</div>
    <span class="wb">Rosé</span>
    <div class="wd">
      <div class="wr"><span class="wl">Perfil</span><div class="pills">${pills(v.p)}</div></div>
      <div class="wr"><span class="wl">Harmoniza</span><div class="pills">${pills(v.h)}</div></div>
      ${v.nota ? `<div class="wnota">${v.nota}</div>` : ''}
    </div>
  </div>`).join('');

// Tabelas
document.getElementById('th').innerHTML = HARM.map(h => `<tr><td>${h.b}</td><td>${h.c}</td><td style="font-style:italic;font-size:.85rem;color:var(--muted)">${h.d}</td></tr>`).join('');
document.getElementById('tu').innerHTML = UVAS.map(u => `<tr><td>${u.u}</td><td>${u.t}</td><td>${u.c}</td><td style="font-size:.85rem">${u.ps}</td></tr>`).join('');
document.getElementById('tp').innerHTML = PAISES.map(p => `<tr><td>${p.p}</td><td>${p.d}</td></tr>`).join('');

// Flashcards
document.getElementById('gfl').innerHTML = FLASH.map(f => `
  <div class="fc" role="button" tabindex="0" aria-label="Flashcard: ${f.f}">
    <div class="fi">
      <div class="ff">${f.f}</div>
      <div class="fb">${f.v}</div>
    </div>
  </div>`).join('');
document.getElementById('gfl').addEventListener('click', e => { const fc = e.target.closest('.fc'); if (fc) fc.classList.toggle('flip'); });
document.getElementById('gfl').addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { const fc = e.target.closest('.fc'); if (fc) { e.preventDefault(); fc.classList.toggle('flip'); } } });

// Resumo
document.getElementById('gr2').innerHTML = RESUMO.map(r => `
  <div class="resumo-card">
    <h4>${r.t}</h4>
    <ul>${r.its.map(i => `<li>${i}</li>`).join('')}</ul>
  </div>`).join('');

// ═══════════════════ QUIZ ═══════════════════
(function () {
  let cur = 0, score = 0, answered = false;
  const ql = document.getElementById('ql'), qbar = document.getElementById('qbar'),
    qq = document.getElementById('qq'), qopts = document.getElementById('qopts'),
    qfb = document.getElementById('qfb'), qnext = document.getElementById('qnext'),
    qsc = document.getElementById('qsc');

  function load() {
    const q = QUIZ[cur]; answered = false;
    ql.textContent = `PERGUNTA ${cur + 1} / ${QUIZ.length}`;
    qbar.style.width = `${(cur / QUIZ.length) * 100}%`;
    qq.textContent = q.q; qfb.textContent = ''; qnext.style.display = 'none';
    qopts.innerHTML = q.opts.map((o, i) => `<button class="opt" data-idx="${i}">${o}</button>`).join('');
    qsc.textContent = `${score} acerto${score !== 1 ? 's' : ''}`;
  }
  function answer(i) {
    if (answered) return; answered = true;
    const q = QUIZ[cur]; const btns = qopts.querySelectorAll('.opt');
    btns.forEach(b => b.disabled = true);
    if (i === q.ans) { btns[i].classList.add('correct'); qfb.textContent = '✓ Correto!'; score++; }
    else { btns[i].classList.add('wrong'); btns[q.ans].classList.add('correct'); qfb.textContent = '✗ Incorreto. A resposta correta está em verde.'; }
    qsc.textContent = `${score} acerto${score !== 1 ? 's' : ''}`;
    if (cur < QUIZ.length - 1) { qnext.style.display = 'block'; }
    else {
      qbar.style.width = '100%';
      setTimeout(() => {
        const pct = Math.round((score / QUIZ.length) * 100);
        qfb.textContent = `Fim! Você acertou ${score} de ${QUIZ.length} (${pct}%). ${score >= 10 ? '🍾 Expert em vinhos!' : score >= 7 ? '👍 Bom trabalho!' : '📖 Revise e tente de novo!'}`;
      }, 300);
    }
  }
  qopts.addEventListener('click', e => { const btn = e.target.closest('.opt'); if (btn && !btn.disabled) answer(parseInt(btn.dataset.idx, 10)); });
  qnext.addEventListener('click', () => { cur++; if (cur < QUIZ.length) load(); });
  load();
})();

// ═══════════════════ NAV ═══════════════════
(function () {
  const secs = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('nav a');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id)); });
  }, { rootMargin: '-30% 0px -60% 0px' });
  secs.forEach(s => obs.observe(s));

  const hamBtn = document.getElementById('hamBtn');
  const navDrawer = document.getElementById('navDrawer');
  hamBtn.addEventListener('click', () => {
    const open = navDrawer.classList.toggle('open');
    hamBtn.classList.toggle('open', open);
    hamBtn.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.drawer-link').forEach(a => {
    a.addEventListener('click', () => { navDrawer.classList.remove('open'); hamBtn.classList.remove('open'); hamBtn.setAttribute('aria-expanded', 'false'); });
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('nav')) { navDrawer.classList.remove('open'); hamBtn.classList.remove('open'); hamBtn.setAttribute('aria-expanded', 'false'); }
  });
})();
