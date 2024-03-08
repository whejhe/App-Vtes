export interface Card{
    _i18n:{
        es:{
            card_text: string;
        }
    };
    id: number;
    _name: string;
    url: string;
    clans: string[];
    types: string[];
    group: string;
    scans: {
        Jyhad:string;
        'Vampire: The Eternal Struggle':string;
        'Camarilla Edition':string;
        Anarchs: string;
        'Black Hand':string;
        'Kindred Most Wanted':string;
        'Third Edition':string;
        'Lords of the Night':string;
        'Keepers of Tradition':string;
        'Sabbat Preconstructed':string;
        'First Blood':string;
        'Fifth Edition':string;
        'Fifth Edition (Anarch)':string;
        'New Blood':string;

    };
    artists: string[];
    capacity: number;
    blood_cost: string;
    pool_cost: string;
    disciplines: string[];
    sets: {
        Jyhad: string[];
        'Vampire: The Eternal Struggle': string[];
        'Camarilla Edition': string[];
        Anarchs: {};
        'Black Hand': string[];
        'Kindred Most Wanted': string[];
        'Third Edition': string[];
        'Lords of the Night': string[];
        'Keepers of Tradition': string[];
        'Sabbat Preconstructed': string[];
        'First Blood': string[];
        'Fifth Edition': string[];
        'Fifth Edition (Anarch)': string[];
        'New Blood': string[];
    };
    card_text: string;
    rulings:{
        text: string[];
    }
}