export interface Card {
  id:               number;
  _name:            string;
  url:              string;
  types:            Type[];
  clans?:           Clan[];
  capacity?:        number;
  disciplines?:     Discipline[];
  card_text:        string;
  _set:             string;
  sets:             WelcomeSets;
  scans:            { [key: string]: string };
  artists:          string[];
  group?:           string;
  ordered_sets:     string[];
  name_variants?:   string[];
  name:             string;
  printed_name:     string;
  rulings?:         Rulings;
  title?:           Title;
  _i18n?:           I18N;
  has_advanced?:    boolean;
  variants?:        { [key: string]: number };
  adv?:             boolean;
  text_change?:     boolean;
  aka?:             string[];
  has_evolution?:   boolean;
  is_evolution?:    boolean;
  banned?:          Date;
  pool_cost?:       string;
  flavor_text?:     string;
  capacity_change?: string;
  multidisc?:       boolean;
  blood_cost?:      string;
  combo?:           boolean;
  conviction_cost?: string;
  burn_option?:     boolean;
}

export interface I18N {
  fr: Es;
  es: Es;
}

export interface Es {
  name?:          string;
  url:            string;
  card_text:      string;
  sets:           EsSets;
  name_variants?: string[];
  flavor_text?:   string;
}

export interface EsSets {
  "First Blood"?:              FirstBlood;
  "Fifth Edition"?:            FifthEdition;
  "Fifth Edition (Anarch)"?:   FifthEditionAnarch;
  "Sabbat Preconstructed"?:    SabbatPreconstructed;
  "Twenty-Fifth Anniversary"?: TwentyFifthAnniversary;
}

export enum FifthEdition {
  CinquièmeÉdition = "Cinquième édition",
  QuintaEdición = "Quinta Edición",
}

export enum FifthEditionAnarch {
  CinquièmeÉditionAnarch = "Cinquième édition (Anarch)",
  QuintaEdiciónAnarquista = "Quinta Edición (Anarquista)",
}

export enum FirstBlood {
  PremierSang = "Premier Sang",
  PrimeraSangre = "Primera Sangre",
}

export enum SabbatPreconstructed {
  PreconstruidosSabbat = "Preconstruidos Sabbat",
  PréconstruitsSabbat = "Préconstruits Sabbat",
}

export enum TwentyFifthAnniversary {
  The25ºAniversario = "25º Aniversario",
  The25ÈmeAnniversaire = "25ème anniversaire",
}

export enum Clan {
  Abomination = "Abomination",
  Ahrimane = "Ahrimane",
  Akunanse = "Akunanse",
  Avenger = "Avenger",
  Baali = "Baali",
  BanuHaqim = "Banu Haqim",
  BloodBrother = "Blood Brother",
  Brujah = "Brujah",
  BrujahAntitribu = "Brujah antitribu",
  // Bundle1 = "Bundle 1",
  // Bundle2 = "Bundle 2",
  Caitiff = "Caitiff",
  DaughterOfCacophony = "Daughter of Cacophony",
  Defender = "Defender",
  // ECBerlinEdition = "EC Berlin Edition",
  Gangrel = "Gangrel",
  GangrelAntitribu = "Gangrel antitribu",
  Gargoyle = "Gargoyle",
  Giovanni = "Giovanni",
  Guruhi = "Guruhi",
  HarbingerOfSkulls = "Harbinger of Skulls",
  // HumbleBundle = "Humble Bundle",
  Innocent = "Innocent",
  Ishtarri = "Ishtarri",
  Judge = "Judge",
  Kiasyd = "Kiasyd",
  Lasombra = "Lasombra",
  Malkavian = "Malkavian",
  MalkavianAntitribu = "Malkavian antitribu",
  Martyr = "Martyr",
  Ministry = "Ministry",
  Nagaraja = "Nagaraja",
  Nosferatu = "Nosferatu",
  NosferatuAntitribu = "Nosferatu antitribu",
  Osebo = "Osebo",
  Pander = "Pander",
  Ravnos = "Ravnos",
  Redeemer = "Redeemer",
  Salubri = "Salubri",
  SalubriAntitribu = "Salubri antitribu",
  Samedi = "Samedi",
  Toreador = "Toreador",
  ToreadorAntitribu = "Toreador antitribu",
  Tremere = "Tremere",
  TremereAntitribu = "Tremere antitribu",
  TrueBrujah = "True Brujah",
  Tzimisce = "Tzimisce",
  Ventrue = "Ventrue",
  VentrueAntitribu = "Ventrue antitribu",
  Visionary = "Visionary",
}


export enum Discipline {
  Abo = "abo",
  Ani = "ani",
  Aus = "AUS",
  Cel = "cel",
  Chi = "CHI",
  DOM = "DOM",
  Dai = "DAI",
  Def = "def",
  Dem = "dem",
  DisciplineABO = "ABO",
  DisciplineANI = "ANI",
  DisciplineAus = "aus",
  DisciplineCEL = "CEL",
  DisciplineChi = "chi",
  DisciplineDEM = "DEM",
  DisciplineDOM = "dom",
  DisciplineDai = "dai",
  DisciplineFOR = "FOR",
  DisciplineMel = "mel",
  DisciplineMyt = "myt",
  DisciplineNEC = "NEC",
  DisciplineOBF = "OBF",
  DisciplineOBT = "OBT",
  DisciplineObe = "obe",
  DisciplinePOT = "POT",
  DisciplinePRE = "PRE",
  DisciplinePro = "pro",
  DisciplineQui = "qui",
  DisciplineSAN = "san",
  DisciplineSER = "SER",
  DisciplineSPI = "SPI",
  DisciplineTHN = "THN",
  DisciplineTem = "tem",
  DisciplineTha = "tha",
  DisciplineVal = "val",
  DisciplineVic = "vic",
  DisciplineVis = "vis",
  Flight = "flight",
  For = "for",
  Inn = "inn",
  Jud = "jud",
  Maleficia = "maleficia",
  Mar = "mar",
  Mel = "MEL",
  Myt = "MYT",
  Nec = "nec",
  Obe = "OBE",
  Obf = "obf",
  Obt = "obt",
  Pot = "pot",
  Pre = "pre",
  Pro = "PRO",
  Qui = "QUI",
  Red = "red",
  SAN = "SAN",
  SPI = "spi",
  Ser = "ser",
  Striga = "striga",
  Tem = "TEM",
  Tha = "THA",
  Thn = "thn",
  Val = "VAL",
  Ven = "ven",
  Vic = "VIC",
  Vin = "vin",
  Vis = "VIS",
  Viz = "viz",
}

export interface Rulings {
  text:  string[];
  links: { [key: string]: string };
}

export interface WelcomeSets {
  "Final Nights"?:                      AnarchUnbound[];
  "Print on Demand"?:                   PrintOnDemand[];
  "Third Edition"?:                     AnarchUnbound[];
  Sabbat?:                              EbonyKingdom[];
  "Sabbat War"?:                        AnarchUnbound[];
  "Fifth Edition (Companion)"?:         The2018_HumbleBundle[];
  "Ancient Hearts"?:                    AncientHeart[];
  "Lords of the Night"?:                AnarchUnbound[];
  "Legacies of Blood"?:                 AnarchUnbound[];
  "Heirs to the Blood"?:                AnarchUnbound[];
  "The Unaligned"?:                     AnarchUnbound[];
  "Ebony Kingdom"?:                     EbonyKingdom[];
  "New Blood"?:                         AnarchUnbound[];
  "Fall of London"?:                    The1996_Promo[];
  "Keepers of Tradition Reprint"?:      AnarchUnbound[];
  "Keepers of Tradition"?:              AnarchUnbound[];
  "Camarilla Edition"?:                 AnarchUnbound[];
  "Blood Shadowed Court"?:              The2023_ChaptersPromo[];
  Bloodlines?:                          AncientHeart[];
  Jyhad?:                               AncientHeart[];
  "Vampire: The Eternal Struggle"?:     EbonyKingdom[];
  "Tenth Anniversary"?:                 AnarchUnbound[];
  Gehenna?:                             EbonyKingdom[];
  "Lost Kindred"?:                      The1996_Promo[];
  "First Blood"?:                       The2018_HumbleBundle[];
  "Danse Macabre"?:                     AnarchUnbound[];
  Anthology?:                           The2018_HumbleBundle[];
  "Echoes of Gehenna"?:                 The1996_Promo[];
  "Heirs to the Blood Reprint"?:        The2018_HumbleBundle[];
  "2005 Storyline promo"?:              The1996_Promo[];
  "Fifth Edition"?:                     The2018_HumbleBundle[];
  "Dark Sovereigns"?:                   AncientHeart[];
  "Kindred Most Wanted"?:               AnarchUnbound[];
  Anarchs?:                             AnarchUnbound[];
  "2021 Mind’s Eye Theatre Promo"?:     The1996_Promo[];
  "Fifth Edition (Anarch)"?:            The2018_HumbleBundle[];
  "New Blood II"?:                      AnarchUnbound[];
  "Sabbat Preconstructed"?:             AnarchUnbound[];
  "Black Hand"?:                        AnarchUnbound[];
  "Twilight Rebellion"?:                EbonyKingdom[];
  "2021 Resellers Promo"?:              The1996_Promo[];
  "Shadows of Berlin"?:                 The1996_Promo[];
  "Legacies of Blood promo"?:           The1996_Promo[];
  "Nights of Reckoning"?:               EbonyKingdom[];
  "Sword of Caine"?:                    EbonyKingdom[];
  "Anarch Unbound"?:                    AnarchUnbound[];
  "2021 Kickstarter Promo"?:            The1996_Promo[];
  "2015 Storyline Rewards"?:            The1996_Promo[];
  "Fall 2004 Storyline promo"?:         The1996_Promo[];
  "Bloodlines promo"?:                  The1996_Promo[];
  "2019 SAC Promo"?:                    The1996_Promo[];
  "2020 Promo Pack 2"?:                 The1996_Promo[];
  "2019 ACC Promo"?:                    The1996_Promo[];
  "V5 Polish Edition promo"?:           The1996_Promo[];
  "2018 Humble Bundle"?:                The2018_HumbleBundle[];
  "2019 Promo Pack 1"?:                 The1996_Promo[];
  "2019 NAC Promo"?:                    The1996_Promo[];
  "2010 Storyline promo"?:              The1996_Promo[];
  "1996 Promo"?:                        The1996_Promo[];
  "Third Edition promo"?:               The1996_Promo[];
  "Kindred Most Wanted promo"?:         The1996_Promo[];
  "Final Nights promo"?:                The1996_Promo[];
  "2021 Promo Pack 3"?:                 The1996_Promo[];
  "2023 Chapters Promo"?:               The2023_ChaptersPromo[];
  "Twenty-Fifth Anniversary"?:          The1996_Promo[];
  "2004 promo"?:                        The1996_Promo[];
  "2023 Mineiro Promo"?:                The1996_Promo[];
  "2019 EC Promo"?:                     The1996_Promo[];
  "Sword of Caine promo"?:              The1996_Promo[];
  "2006 Tournament promo"?:             The1996_Promo[];
  "2021 SAC Promo"?:                    The1996_Promo[];
  "Summer 2003 Storyline promo"?:       The1996_Promo[];
  "2019 AC Promo"?:                     The1996_Promo[];
  "Sabbat War promo"?:                  The1996_Promo[];
  "2022 European GP Promo"?:            The1996_Promo[];
  "2022 EC Promo"?:                     The1996_Promo[];
  "Camarilla Edition promo"?:           The1996_Promo[];
  "2009 Tournament / Storyline promo"?: The1996_Promo[];
  "2019 DriveThruCards Promo"?:         The1996_Promo[];
  "2008 Tournament promo"?:             The1996_Promo[];
  "2006 Storyline promo"?:              The1996_Promo[];
  "2023 Ropecon Promo"?:                The1996_Promo[];
  "Black Hand promo"?:                  The1996_Promo[];
  "2023 War of the Ages Promo"?:        The1996_Promo[];
  "2023 Andalusian Open Promo"?:        The1996_Promo[];
  "2006 Championship promo"?:           The1996_Promo[];
  "Anarchs promo"?:                     The1996_Promo[];
  "Gehenna promo"?:                     The1996_Promo[];
  "2023 Spanish National Promo"?:       The1996_Promo[];
  "2007 Promo"?:                        The1996_Promo[];
  "2023 Belgian Championship Promo"?:   The1996_Promo[];
  "2020 GP Promo"?:                     The1996_Promo[];
  "2019 Grand Prix Promo"?:             The1996_Promo[];
  "Prophecies league promo"?:           The1996_Promo[];
  "Fall 2002 Storyline promo"?:         The1996_Promo[];
  "2022 Fee Stake Promo"?:              The1996_Promo[];
  "2023 Zaragosa Promo"?:               The1996_Promo[];
  "2008 Storyline promo"?:              The1996_Promo[];
  "2006 EC Tournament promo"?:          The1996_Promo[];
  "Winter 2002 Storyline promo"?:       The1996_Promo[];
  "2005 Tournament promo"?:             The1996_Promo[];
  "2019 Promo"?:                        The1996_Promo[];
  "2022 Promo"?:                        The1996_Promo[];
  "2003 Tournament promo"?:             The1996_Promo[];
}

export interface The1996_Promo {
  release_date: Date;
  copies:       number;
}

export interface The2018_HumbleBundle {
  release_date: Date;
  precon?:      Clan;
  copies:       number;
}

export interface The2023_ChaptersPromo {
  release_date: Date;
}

export interface AnarchUnbound {
  release_date: Date;
  rarity?:      Rarity;
  copies?:      number;
  precon?:      AnarchUnboundPrecon;
  frequency?:   number;
}

export enum AnarchUnboundPrecon {
  Akunanse = "Akunanse",
  Alastors = "Alastors",
  AnarchBarons = "Anarch Barons",
  AnarchGang = "Anarch Gang",
  Anathema = "Anathema",
  Assamite = "Assamite",
  Baali = "Baali",
  BanuHaqim = "Banu Haqim",
  Brujah = "Brujah",
  BrujahAntitribu = "Brujah antitribu",
  Bundle1 = "Bundle 1",
  Bundle2 = "Bundle 2",
  DenOfFiends = "Den of Fiends",
  FollowersOfSet = "Followers of Set",
  Gangrel = "Gangrel",
  GangrelAntitribu = "Gangrel antitribu",
  Gargoyles = "Gargoyles",
  Giovanni = "Giovanni",
  Guruhi = "Guruhi",
  Ishtarri = "Ishtarri",
  Kiasyd = "Kiasyd",
  Lasombra = "Lasombra",
  LibertineBall = "Libertine Ball",
  Malkavian = "Malkavian",
  MalkavianAntitribu = "Malkavian antitribu",
  Ministry = "Ministry",
  Nosferatu = "Nosferatu",
  NosferatuAntitribu = "Nosferatu antitribu",
  Osebo = "Osebo",
  PactWithNephandi = "Pact with Nephandi",
  ParliamentOfShadows = "Parliament of Shadows",
  Ravnos = "Ravnos",
  SalubriAntitribu = "Salubri antitribu",
  Samedi = "Samedi",
  StarterKitBrujahAntitribu = "Starter Kit Brujah antitribu",
  StarterKitMalkavianAntitribu = "Starter Kit Malkavian antitribu",
  StarterKitTremereAntitribu = "Starter Kit Tremere antitribu",
  StarterKitTzimisce = "Starter Kit Tzimisce",
  TinA = "Tin A",
  TinB = "Tin B",
  Toreador = "Toreador",
  ToreadorAntitribu = "Toreador antitribu",
  Tremere = "Tremere",
  TremereAntitribu = "Tremere antitribu",
  Tzimisce = "Tzimisce",
  Ventrue = "Ventrue",
  VentrueAntitribu = "Ventrue antitribu",
}

export enum Rarity {
  Common = "Common",
  Rare = "Rare",
  Uncommon = "Uncommon",
  Vampire = "Vampire",
}

export interface AncientHeart {
  release_date: Date;
  rarity:       Rarity;
  frequency?:   number;
}

export interface EbonyKingdom {
  release_date: Date;
  rarity:       Rarity;
}

export interface PrintOnDemand {
  precon: PrintOnDemandPrecon;
  copies: number;
}

export enum PrintOnDemandPrecon {
  DriveThruCards = "DriveThruCards",
}

export enum Title {
  Archbishop = "Archbishop",
  Baron = "Baron",
  Bishop = "Bishop",
  Cardinal = "Cardinal",
  InnerCircle = "Inner Circle",
  Justicar = "Justicar",
  Magaji = "Magaji",
  Primogen = "Primogen",
  Prince = "Prince",
  Priscus = "Priscus",
  Regent = "Regent",
  The1Vote = "1 vote",
  The2Votes = "2 votes",
}

export enum Type {
  Action = "Action",
  ActionModifier = "Action Modifier",
  Ally = "Ally",
  Combat = "Combat",
  Conviction = "Conviction",
  Equipment = "Equipment",
  Event = "Event",
  Imbued = "Imbued",
  Master = "Master",
  PoliticalAction = "Political Action",
  Power = "Power",
  Reaction = "Reaction",
  Retainer = "Retainer",
  Vampire = "Vampire",
}
