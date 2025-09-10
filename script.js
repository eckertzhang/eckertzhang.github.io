// 标签页切换功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有标签按钮和内容区域
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // 标签页切换函数
    function switchTab(targetTab) {
        // 移除所有活跃状态
        tabButtons.forEach(btn => {
            btn.classList.remove('active', 'border-blue-600', 'text-blue-600');
            btn.classList.add('border-transparent', 'text-gray-700');
        });
        
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // 激活目标标签
        const activeButton = document.querySelector(`[data-tab="${targetTab}"]`);
        const activeContent = document.getElementById(targetTab);
        
        if (activeButton && activeContent) {
            activeButton.classList.add('active', 'border-blue-600', 'text-blue-600');
            activeButton.classList.remove('border-transparent', 'text-gray-700');
            activeContent.classList.add('active');
        }
    }

    // 为每个标签按钮添加点击事件
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });

    // 初始化第一个标签为活跃状态
    switchTab('homepage');

    // 平滑滚动功能
    function smoothScrollTo(element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // 为所有内部链接添加平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                smoothScrollTo(targetElement);
            }
        });
    });

    // 动态加载更多论文功能
    function loadMorePublications() {
        const additionalContainer = document.querySelector('#additionalPublications');
        
        // 模拟更多论文数据
        const additionalPublications = [
            {
                title: "A multiple beta wavelet-based locally regularized ultraorthogonal forward regression algorithm for time-varying system identification with applications to EEG",
                authors: "Yang Li, <strong>Jingbo Zhang</strong>, Weigang Cui, Heng Yuan, Hualiang Wei",
                venue: "IEEE Transactions on Instrumentation and Measurement (<strong>TIM</strong>), 2019",
                // description: "",
                image: "./papers/2019_beta_wavelet/beta_wavelet.jpg",
                // page: "",
                pdf: "https://eprints.whiterose.ac.uk/144526/1/IEEE-IM%20Accepted%20Paper%20%28Accepetd%2014-03-2019%29.pdf",
                // code: "",
                // video: "",
                bibtex: "./papers/2019_beta_wavelet/li2019multiple.bib",
            },
        ];

        // 创建新的论文条目
        additionalPublications.forEach(pub => {
            const pubElement = createPublicationElement(pub);
            additionalContainer.appendChild(pubElement);
        });

        // 在列表末尾添加折叠按钮
        const collapseButtonContainer = document.createElement('div');
        collapseButtonContainer.className = 'text-center mt-8 pt-6 border-t border-gray-200';
        collapseButtonContainer.id = 'collapseButtonContainer';
        
        const collapseButton = document.createElement('button');
        collapseButton.className = 'inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors';
        collapseButton.innerHTML = '<i class="fas fa-chevron-up mr-2"></i>Collapse Publication List';
        collapseButton.id = 'collapsePublications';
        
        collapseButtonContainer.appendChild(collapseButton);
        additionalContainer.appendChild(collapseButtonContainer);

        // 为新的折叠按钮添加事件监听器
        collapseButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 隐藏额外论文
            additionalContainer.style.display = 'none';
            
            // 显示并重置原始按钮
            const originalToggleButton = document.querySelector('#togglePublications');
            if (originalToggleButton) {
                originalToggleButton.innerHTML = '<i class="fas fa-chevron-down mr-2"></i>View Complete Publication List';
                originalToggleButton.style.display = 'inline-flex';
                isExpanded = false;
                
                // 滚动回到原始按钮位置
                originalToggleButton.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center' 
                });
            }
        });
    }

    // 创建论文元素的辅助函数
    function createPublicationElement(publication) {
        const pubDiv = document.createElement('div');
        pubDiv.className = 'publication-item bg-gray-50 rounded-lg p-6';
        const descriptionHtml = publication.description && publication.description.trim() !== ''
            ? `<p class="text-gray-700 text-sm leading-relaxed mb-3">
                    ${publication.description}
                </p>`
            : `<!-- publication.description is empty, paragraph omitted -->`;
        const pageHtml = publication.page && publication.page.trim() !== ''
            ? `<a href="${publication.page}" class="text-blue-600 hover:text-blue-800"><i class="fa-solid fa-house mr-1"></i>Project Page</a>`
            : `<!-- publication.page is empty, paragraph omitted -->`;
        const pdfHtml = publication.pdf && publication.pdf.trim() !== ''
            ? `<a href="${publication.pdf}" class="text-yellow-500 hover:text-yellow-800"><i class="fas fa-file-pdf mr-1"></i>PDF</a>`
            : `<!-- publication.pdf is empty, paragraph omitted -->`;
        const codeHtml = publication.code && publication.code.trim() !== ''
            ? `<a href="${publication.code}" class="text-red-600 hover:text-red-800"><i class="fab fa-github mr-1"></i>Code</a>`
            : `<!-- publication.code is empty, paragraph omitted -->`;
        const videoHtml = publication.video && publication.video.trim() !== ''
            ? `<a href="${publication.video}" class="text-green-600 hover:text-green-800"><i class="fa-solid fa-video mr-1"></i>Video</a>`
            : `<!-- publication.video is empty, paragraph omitted -->`;
        const bibtexHtml = publication.bibtex && publication.bibtex.trim() !== ''
            ? `<a href="${publication.bibtex}" class="text-purple-600 hover:text-purple-800"><i class="fas fa-quote-left mr-1"></i>BibTeX</a>`
            : `<!-- publication.bibtex is empty, paragraph omitted -->`;
        
        pubDiv.innerHTML = `
            <div class="grid md:grid-cols-4 gap-6">
                <div class="md:col-span-1">
                    <img src="${publication.image}" 
                         alt="Paper" 
                         class="w-full h-full object-cover rounded-lg">
                </div>
                <div class="md:col-span-3">
                    <h4 class="text-lg font-semibold text-gray-800 mb-2">${publication.title}</h4>
                    <p class="text-sm text-gray-600 mb-2">${publication.authors}</p>
                    <p class="text-sm text-gray-500 mb-2"><em>${publication.venue}</em></p>
                    ${descriptionHtml}
                    <div class="flex space-x-4 text-sm">
                        ${pageHtml}
                        ${pdfHtml}
                        ${codeHtml}
                        ${videoHtml}
                        ${bibtexHtml}
                    </div>
                </div>
            </div>
        `;
        
        return pubDiv;
    }

    // 为展开/折叠论文列表按钮添加事件
    const toggleButton = document.querySelector('#togglePublications');
    const additionalContainer = document.querySelector('#additionalPublications');
    let isExpanded = false;
    
    if (toggleButton && additionalContainer) {
        toggleButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (!isExpanded) {
                // 展开：加载更多论文并显示
                if (additionalContainer.children.length === 0) {
                    loadMorePublications();
                }
                additionalContainer.style.display = 'block';
                
                // 隐藏原始按钮
                this.style.display = 'none';
                isExpanded = true;
                
                // 平滑滚动到展开的内容
                setTimeout(() => {
                    additionalContainer.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'nearest' 
                    });
                }, 100);
            }
        });
    }

    // 新闻项目悬停效果
    const newsItems = document.querySelectorAll('.news-item');
    newsItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // 专利项目点击展开详情功能
    const patentItems = document.querySelectorAll('.patent-item');
    patentItems.forEach(item => {
        item.addEventListener('click', function() {
            const isExpanded = this.classList.contains('expanded');
            
            // 收起所有其他专利项目
            patentItems.forEach(otherItem => {
                if (otherItem !== this) {
                    otherItem.classList.remove('expanded');
                    const details = otherItem.querySelector('.patent-details');
                    if (details) {
                        details.remove();
                    }
                }
            });
            
            if (!isExpanded) {
                // 展开当前项目
                this.classList.add('expanded');
                const detailsDiv = document.createElement('div');
                detailsDiv.className = 'patent-details mt-4 pt-4 border-t border-gray-200';
                detailsDiv.innerHTML = `
                    <h5 class="font-semibold text-gray-800 mb-2">技术详情</h5>
                    <p class="text-sm text-gray-700 leading-relaxed mb-3">
                        该专利技术采用了先进的算法设计和系统架构，具有高效性、可扩展性和实用性等特点。
                        技术方案经过充分验证，已在多个实际场景中得到应用。
                    </p>
                    <div class="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <h6 class="font-medium text-gray-800 mb-1">技术优势</h6>
                            <ul class="text-gray-600 space-y-1">
                                <li>• 算法效率提升30%以上</li>
                                <li>• 支持大规模数据处理</li>
                                <li>• 具有良好的可扩展性</li>
                            </ul>
                        </div>
                        <div>
                            <h6 class="font-medium text-gray-800 mb-1">应用场景</h6>
                            <ul class="text-gray-600 space-y-1">
                                <li>• 智能制造系统</li>
                                <li>• 金融风控平台</li>
                                <li>• 医疗诊断辅助</li>
                            </ul>
                        </div>
                    </div>
                `;
                this.appendChild(detailsDiv);
            } else {
                // 收起当前项目
                this.classList.remove('expanded');
                const details = this.querySelector('.patent-details');
                if (details) {
                    details.remove();
                }
            }
        });
    });

    // 统计数字动画效果
    function animateNumbers() {
        const numberElements = document.querySelectorAll('.text-2xl.font-bold, .text-3xl.font-bold');
        
        numberElements.forEach(element => {
            const finalNumber = parseInt(element.textContent.replace(/\D/g, ''));
            if (finalNumber && finalNumber > 0) {
                let currentNumber = 0;
                const increment = Math.ceil(finalNumber / 50);
                const timer = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= finalNumber) {
                        currentNumber = finalNumber;
                        clearInterval(timer);
                    }
                    
                    // 保持原有的格式（如+号、万等）
                    const originalText = element.textContent;
                    if (originalText.includes('+')) {
                        element.textContent = currentNumber + '+';
                    } else if (originalText.includes('万')) {
                        element.textContent = currentNumber + '万+';
                    } else {
                        element.textContent = currentNumber;
                    }
                }, 50);
            }
        });
    }

    // 使用Intersection Observer来触发数字动画
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 观察包含统计数字的区域
    const statsSection = document.querySelector('.bg-blue-50');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // 搜索功能（为论文和专利添加简单搜索）
    function createSearchBox() {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'mb-6';
        searchContainer.innerHTML = `
            <div class="relative">
                <input type="text" 
                       id="searchInput" 
                       placeholder="搜索论文、专利或关键词..." 
                       class="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
            </div>
        `;
        
        return searchContainer;
    }

    // 为Publications部分添加搜索框
    // const publicationsSection = document.querySelector('#homepage section:nth-child(5)');
    // if (publicationsSection) {
    //     const searchBox = createSearchBox();
    //     const title = publicationsSection.querySelector('h2');
    //     if (title && title.parentNode) {
    //         title.parentNode.insertBefore(searchBox, title.nextSibling);
    //     }
        
    //     // 搜索功能实现
    //     const searchInput = searchBox.querySelector('#searchInput');
    //     searchInput.addEventListener('input', function() {
    //         const searchTerm = this.value.toLowerCase();
    //         const publications = publicationsSection.querySelectorAll('.publication-item');
            
    //         publications.forEach(pub => {
    //             const text = pub.textContent.toLowerCase();
    //             if (text.includes(searchTerm)) {
    //                 pub.style.display = 'block';
    //                 pub.style.opacity = '1';
    //             } else {
    //                 pub.style.display = 'none';
    //                 pub.style.opacity = '0';
    //             }
    //         });
    //     });
    // }

    // 返回顶部按钮
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTopButton.className = 'fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 opacity-0 pointer-events-none';
    backToTopButton.id = 'backToTop';
    document.body.appendChild(backToTopButton);

    // 显示/隐藏返回顶部按钮
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.pointerEvents = 'auto';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.pointerEvents = 'none';
        }
    });

    // 返回顶部功能
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 响应式导航菜单（移动端）
    function createMobileMenu() {
        const nav = document.querySelector('nav');
        if (!nav) return;
        
        const mobileMenuButton = document.createElement('button');
        mobileMenuButton.className = 'md:hidden p-2 text-gray-700';
        mobileMenuButton.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        
        // 正确选择导航容器 - 它在nav > div.container > div.flex结构中
        const navContainer = nav.querySelector('.container');
        const tabContainer = navContainer ? navContainer.querySelector('.flex') : null;
        
        if (!tabContainer) {
            console.warn('Tab container not found');
            return;
        }
        
        tabContainer.classList.add('md:flex', 'hidden');
        
        // 将移动菜单按钮插入到容器div中，而不是nav中
        navContainer.insertBefore(mobileMenuButton, tabContainer);
        
        mobileMenuButton.addEventListener('click', function() {
            tabContainer.classList.toggle('hidden');
            const icon = this.querySelector('i');
            if (tabContainer.classList.contains('hidden')) {
                icon.className = 'fas fa-bars text-xl';
            } else {
                icon.className = 'fas fa-times text-xl';
            }
        });
    }

    // 初始化移动端菜单
    createMobileMenu();

    // 图片懒加载
    const images = document.querySelectorAll('img[src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('fade-in');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });

    // 添加CSS动画类
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .publication-item {
            transition: all 0.3s ease;
        }
        
        .publication-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        
        .patent-item {
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .patent-item:hover {
            transform: translateY(-1px);
        }
        
        .patent-details {
            animation: slideDown 0.3s ease-out;
        }
        
        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        #backToTop {
            transition: all 0.3s ease;
        }
        
        #backToTop:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }
    `;
    document.head.appendChild(style);

    console.log('个人主页初始化完成');
});