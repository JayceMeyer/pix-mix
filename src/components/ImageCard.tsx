import { ImageObject } from "../classes/ImageObject";

export function ImageCard(
    {
        img = new ImageObject()
    }: {
        img?: ImageObject
    }) {
    return (
        <div className={img.cardClassName}>
            <img 
                src={img.url} 
                alt={img.altText}
                className={img.imageClassName}
                onClick={img.onClick} />
            <label>{img.label}</label>
        </div>
    );
}