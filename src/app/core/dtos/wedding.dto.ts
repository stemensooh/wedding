export interface WeddingDto {
    _id: string
    fecha: string
    resumen: string
    mensaje: string
    createdAt: string
    __v: number
    cupler: Cupler[]
    sliders: Slider[]
    galleries: Gallery[]
    events: Event[]
    timelines: Timeline[]
    maps: Map[]
  }
  
  export interface Cupler {
    _id: string
    weddingId: string
    novioNombre: string
    novioApellido: string
    novioFoto: string
    novioDescripcion: string
    noviaNombre: string
    noviaApellido: string
    noviaFoto: string
    noviaDescripcion: string
    createdAt: string
    __v: number
  }
  
  export interface Slider {
    _id: string
    weddingId: string
    titulo: string
    foto: string
    createdAt: string
    __v: number
  }
  
  export interface Gallery {
    _id: string
    weddingId: string
    titulo: string
    foto: string
    createdAt: string
    __v: number
  }
  
  export interface Event {
    _id: string
    weddingId: string
    titulo: string
    fecha: string
    descripcion: string
    createdAt: string
    __v: number
  }
  
  export interface Timeline {
    _id: string
    weddingId: string
    fecha: string
    titulo: string
    descripcion: string
    icono: string
    createdAt: string
    __v: number
  }
  
  export interface Map {
    _id: string
    weddingId: string
    descripcion: string
    coordenadas: string
    mensaje: string
    createdAt: string
    __v: number
  }
  