import Image from 'next/image';
import styles from "../styles/resizing.module.css";
import { useState } from "react";

export default function IntResizing() {
    const [sliderValue, setSliderValue] = useState(75);
    const [size, setSize] = useState("L"); // initial value
    const maxWidth = 150
    const minWidth = 50
    //              [XS, S, M, L, XL]
    const sizes =  ["XXS", "XS", "S", "M", "L", "XL", "XXL"]
    const sizeWidths = sizes.map((size, i) => 
         50 + i * (50) / (sizes.length - 1));


    return (
    <div className={styles.mainContainer}>
        <Image
          src="/images/standard.jpg"
          alt="US T-Shirt standard sizing fits"
          width={400}
          height={300}
        />
        <div>
        <label>The Size of Your Item</label>
        <select
            id="size"
            name="size"
            value={size}  // controlled by state
            onChange={(e) => {
                const newSize = e.target.value;
                setSize(newSize); 
                setSliderValue(sizeWidths[sizes.indexOf(newSize)])
            }
            } // update state
        >
            {sizes.map(size => (<option value={size}>{size}</option>))}
        </select>
        </div>
        
        <div className={styles.resizerOuterContainer}>
            <p>{size}➡️{sizeWidths[sizeWidths.indexOf(sliderValue)]}</p>
            <div className={styles.resizerInnerContainer}>
            <div className={styles.imageWrapper}>
                <Image
                src="/images/placeholderShirt.png"
                alt="Placeholder shirt"
                width={sliderValue / 100 * maxWidth}  // scales with slider
                height={sliderValue / 100 * maxWidth} // scales with slider
                style={{ maxWidth: "100%", height: "auto" }} // responsive
                />
            </div>
            <input
                type="range"
                className={styles.verticalSlider}
                min={50}
                max={100}
                step={2}
                value={sliderValue}               // controlled by state
                onChange={(e) => setSliderValue(Number(e.target.value))}  // update state
            />
            </div>

        </div>

    </div>
  );
}
