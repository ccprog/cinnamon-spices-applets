declare namespace imports.gi.Cvc {
    interface Name {
        name: string
    }

    export class MixerControl extends GObject.Object {
        constructor(name: Name);

        open(): void
        lookup_stream_id(id: number): MixerStream
        get_vol_max_norm(): number
    }

    export class MixerStream extends GObject.Object {
        // props
        name: string
        is_muted: boolean
        volume: number

        // methods
        change_is_muted(is_muted: boolean): boolean
        push_volume(): void
    }
} 
