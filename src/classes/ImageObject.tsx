export class ImageObject {
    id?: number | null;    
    label?: string = "";
    altText?: string = "a default image";
    url?: string = "https://i.imgur.com/ekt2ANt.png";
    cardClassName: string = "image-card";
    imageClassName: string = "image-object";
    onClick?: ((data: any) => void) = () => window.open(this.url, "_blank");
}