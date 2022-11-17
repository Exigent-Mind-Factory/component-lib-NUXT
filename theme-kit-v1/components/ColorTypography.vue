<template>
    <section id="color" class="color-typography wrapper">
        <!-- Colors -->
        <div class="inner-wrapper">
            <h2>Colors</h2>
            <p>These are the default Exigent brand theme colors and should be updated as per application/client requirements.</p>
            <div class="colors disflex-start">
                <div class="color-box">
                    <div class="palette primary"></div>
                    <div class="info">
                        <p>Primary</p>
                        <span>#A03F74</span>
                    </div>
                </div>
                <div class="color-box">
                    <div class="palette secondary"></div>
                    <div class="info">
                        <p>Secondary</p>
                        <span>#313E47</span>
                    </div>
                </div>
                <div class="color-box">
                    <div class="palette alternate"></div>
                    <div class="info">
                        <p>Alternate</p>
                        <span>#475964</span>
                    </div>
                </div>
                <div class="color-box">
                    <div class="palette light-grey"></div>
                    <div class="info">
                        <p>Light Grey</p>
                        <span>#EEEEEE</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Typography -->
        <div class="inner-wrapper">
            <h2>Typography</h2>
            <p>Lorem ipsum dolor sit amet. Aut quas tenetur cum dignissimos culpa ea possimus possimus vel enim dolorum. Non iste galisum hic voluptate laboriosam nam nobis voluptate.</p>
            <div class="headings">
                <h1 class="pb-small">h1: The spectacle before us was indeed sublime.</h1>
                <h2 class="pb-small">h2: The spectacle before us was indeed sublime.</h2>
                <h3 class="pb-small">h3: The spectacle before us was indeed sublime.</h3>
                <h4 class="pb-small">h4: The spectacle before us was indeed sublime.</h4>
                <h5 class="pb-small">h5: The spectacle before us was indeed sublime.</h5>
                <h6 class="pb-small">h6: The spectacle before us was indeed sublime.</h6>
                <p><b>Paragraph:</b></p>
                <p>Lorem ipsum dolor sit amet. At voluptates pariatur et dolores atque hic voluptatem nulla aut aliquam dolores ut laboriosam corporis non labore architecto. Qui dicta pariatur in accusamus minus veniam quia nam numquam fuga qui corrupti voluptatem et animi blanditiis quo nostrum dolores. Cum omnis voluptas qui possimus quia quo adipisci officia.</p>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .color-typography{
        .inner-wrapper{
            margin-top: 60px;
        }
        p{
            margin-top: 10px;
            color: var(--alternate-color);
        }
        .colors{
            margin-top: 30px;
            .color-box{
                position: relative;
                height: 140px;
                width: 100px;
                background-color: var(--light-grey);
                margin-right: 10px;
                border-radius: 4px;
                .palette{
                    height: 80px;
                    width: 100%;
                    border-top-left-radius: 4px;
                    border-top-right-radius: 4px;
                }
                .info{
                    height: 60px;
                    font-size: .8rem;
                    box-sizing: border-box;
                    padding: 10px;
                    p{
                        margin: 0;
                        padding-bottom: 5px;
                        color: var(--secondary-color);
                    }
                    span{
                        color: var(--alternate-color);
                    }
                }
            }
        }
        .headings{
            margin-top: 40px;
            .pb-small{
                margin-top: 20px;
            }
            p{
                margin-top: 20px;
                font-size: .9rem;
                color: var(--alternate-color);
                max-width: 800px;
            }
        }
    }
</style>