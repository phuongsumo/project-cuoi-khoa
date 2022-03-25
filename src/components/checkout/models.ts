// declare module mapData {
export interface Properties {
    short_code: string;
    wikidata: string;
}

export interface Geometry {
    type: string;
    coordinates: number[];
}

export interface Context {
    id: string;
    wikidata: string;
    short_code: string;
    text: string;
}

export interface Feature {
    id: string;
    type: string;
    place_type: string[];
    relevance: number;
    properties: Properties;
    text: string;
    place_name: string;
    bbox: number[];
    center: number[];
    geometry: Geometry;
    context: Context[];
}
export interface MapData {
    type: string;
    query: string[];
    features: Feature[];
}
// }
