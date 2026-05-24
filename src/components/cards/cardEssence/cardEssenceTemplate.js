export const cardEssenceTemplate = (essence, index) => `
                <div class="group esencia-item flex flex-col ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-4 md:h-[500px] max-w-7xl">
                    <div class="w-full md:w-1/2 relative aspect-[4/3]">
                        <img src="${essence.image}" class="w-full h-full object-cover rounded-xl" alt="">
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col justify-center px-5">
                        <div class="mb-1 md:mb-2">
                            <h4 class="mt-4 text-xs md:text-md font-montserrat tracking-wider text_numeral_alt">
                                ${essence.titleLittle}
                            </h4>
                            <hr class="w-24 border-slate-300 my-2 mr-auto border-subrayado">
                        </div>
                        <h2 class="font-semibold text-2xl md:text-3xl font-cormorant tracking-wide text-title">
                            ${essence.title}</h2>
                        <p class="text-sm md:text-lg font-montserrat tracking-normal text-paragraph">
                            ${essence.description}
                        </p>
                    </div>
                </div>
`
