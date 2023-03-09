import getDynamicComponent from "../../shared/SharedComponent";
import { Suspense } from "react";
const HeroContentRowArea = ({data}) => {
    const components = []
    const expComp = []
    const componentData = []
    if (data.contentRowsItems) {
        data.contentRowsItems.forEach((block,i) => {
            if (block.name === 'LargeContentItem' || block.name === 'PromotionContainer' || block.name === 'PromotionContainerItem') {
                components.push(getDynamicComponent(block.name));
                expComp.push(block.name)
                //components.push(getDynamicComponent(block.name));
                let cls = 'PromotionContainer--twoModules';
                if (block?.props?.count === 3) {
                    cls = 'PromotionContainer--threeModules';
                }
                componentData.push({class: cls, items: block?.props?.rowProps})
            }
        })
    }
    return ( 
        <div className="HeroContentRowArea">
            {/* {data.contentRowsItems && data.contentRowsItems.map((block, i)=> (
                <h2 dangerouslySetInnerHTML={{__html: block.name}}></h2>
            ))} */}
            <Suspense fallback={`...`}>
                {components.map((Component, k) => (
                    <Component key={k} data={componentData[k]} />
                ))}
            </Suspense>
        </div>
     );
}
 
export default HeroContentRowArea;