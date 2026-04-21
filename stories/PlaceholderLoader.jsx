import { useState, useEffect } from "react";

export const PlaceholderLoader = ({ header, subheader, intro, listItems }) => {
    const [loadingState, updateLoadingState] = useState(true);
    const [contentState, updateContentState] = useState({
        header: 'Loading',
        subHeader: 'Loading',
        intro: 'Loading',
        list: [...Array(listItems)].map((_, i) => {
            return 'Loading';
        })
    })

    const content = {
        header: `Lorem Ipsum`,
        subHeader: `Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`,
        intro: `There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...`,
        list: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat sagittis lectus, quis pretium arcu sagittis quis. Proin pretium convallis neque, non tincidunt leo iaculis at. Sed enim velit, tristique rhoncus purus eget, tempus pretium augue. Mauris magna lacus, egestas ac mauris eget, posuere imperdiet diam. Etiam a est pulvinar, aliquet purus at, cursus sapien. Nunc vitae justo tristique orci tempus varius nec ut risus. Duis ac ornare leo, a commodo enim. Aenean pharetra quam libero, ut imperdiet sem porttitor quis. Proin gravida sed urna iaculis dapibus. Sed eleifend lorem lacus, et lobortis tellus blandit id. Sed maximus leo id ipsum placerat, ut gravida est hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec dui at tortor tempor scelerisque tempor quis ex. Duis ac consequat lacus. Ut viverra sed metus eget dignissim.`,
            `In hac habitasse platea dictumst. Phasellus metus urna, convallis in imperdiet tincidunt, tempor eget leo. Nulla facilisis lacus nec tortor malesuada rutrum ultrices sit amet erat. Duis consequat diam nec risus consectetur, porttitor fringilla dui porttitor. Maecenas pretium vulputate ipsum at tempor. Nunc dignissim nisl erat, sit amet luctus nisl auctor cursus. Ut rutrum dictum rutrum. Aenean nisl ipsum, molestie nec tincidunt non, iaculis in metus. Donec leo purus, laoreet sed faucibus sit amet, convallis ut leo. Donec venenatis id augue vel maximus. Proin eleifend vel magna id tincidunt. Maecenas quis erat rutrum, ullamcorper libero ullamcorper, venenatis tortor. Proin venenatis commodo dui sit amet tempor. Curabitur ornare felis nec leo auctor fringilla. Nunc congue euismod ipsum.`,
        ]
    };

    useEffect(() => {
        setTimeout(() => {
            updateContentState(content);
            updateLoadingState(false);
        }, 2000);
    }, []);

    return (
        <div className="container">
            <main className={loadingState ? 'loading' : ''}>
                {header && <h1>{contentState.header}</h1>}
                {subheader && <h2>{contentState.subHeader}</h2>}
                {intro && <p>{contentState.intro}</p>}
                {listItems > 0 && <ul className={loadingState ? 'loading' : ''}>
                    {Array.isArray(contentState.list) &&
                        contentState.list.map((item, i) => {
                            return <li className={loadingState ? 'loading' : ''}>{item}</li>;
                        })}
                </ul>}
            </main>
            <footer className={loadingState ? 'loading' : ''}>
                {listItems > 0 && <ul className={loadingState ? 'loading' : ''}>
                    {Array.isArray(contentState.list) &&
                        contentState.list.map((item, i) => {
                            return <li className={loadingState ? 'loading' : ''}>{item}</li>;
                        })}
                </ul>}
                {!loadingState && <span>Want to see other projects? Check them <a href="https://adrian-szlegel-personal-projects.netlify.app/" target="_blank" style={{ color: "blue", texDecoration: "underline" }}>here</a></span>}
            </footer>
        </div>
    );
}