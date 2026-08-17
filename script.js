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
            btn.setAttribute('aria-selected', 'false');
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
            activeButton.setAttribute('aria-selected', 'true');
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

    // ====== 媒体辅助：尺寸清单（防布局抖动）+ 图片/视频渲染 ======
    // 返回形如 ` width="1000" height="542"` 的属性串（无匹配则返回空串）
    function dimAttr(src) {
        const d = window.__mediaDims && window.__mediaDims[src];
        return d ? ` width="${d.w}" height="${d.h}"` : '';
    }

    // 缩略图：有 clip 字段的条目渲染为自动播放的静音循环视频（由 GIF 转码而来），否则渲染图片
    function renderThumb(item, imgClass, alt) {
        if (item.clip) {
            return `<video class="${imgClass}"${dimAttr(item.image)} autoplay muted loop playsinline preload="metadata" poster="${item.image}">
                        <source src="${item.clip}.webm" type="video/webm">
                        <source src="${item.clip}.mp4" type="video/mp4">
                    </video>`;
        }
        return `<img src="${item.image}" alt="${alt}" loading="lazy" decoding="async"${dimAttr(item.image)} class="${imgClass}">`;
    }

    // ====== 论文 / 专利：从 data.js 渲染 ======
    function buildPublicationLinks(pub) {
        const links = [];
        const ext = 'target="_blank" rel="noopener noreferrer"';
        if (pub.page)   links.push(`<a href="${pub.page}" ${ext} class="text-blue-600 hover:text-blue-800"><i class="fa-solid fa-house mr-1"></i>Project Page</a>`);
        if (pub.pdf)    links.push(`<a href="${pub.pdf}" ${ext} class="text-yellow-500 hover:text-yellow-800"><i class="fas fa-file-pdf mr-1"></i>PDF</a>`);
        if (pub.code)   links.push(`<a href="${pub.code}" ${ext} class="text-red-600 hover:text-red-800"><i class="fab fa-github mr-1"></i>Code</a>`);
        if (pub.video)  links.push(`<a href="${pub.video}" ${ext} class="text-green-600 hover:text-green-800"><i class="fa-solid fa-video mr-1"></i>Video</a>`);
        if (pub.bibtex) links.push(`<a href="${pub.bibtex}" ${ext} class="text-purple-600 hover:text-purple-800"><i class="fas fa-quote-left mr-1"></i>BibTeX</a>`);
        return links.join('\n                                    ');
    }

    function renderPublicationCard(pub) {
        const card = document.createElement('div');
        card.className = 'publication-item bg-gray-50 rounded-lg p-4 sm:p-6';
        // 图片显示模式：默认 'cover'（原始自适应填充，可能裁剪边缘）；设 imageFit: 'contain' 则完整显示、不裁剪
        const imgClass = pub.imageFit === 'contain'
            ? 'w-full h-auto max-h-64 object-contain rounded-lg mx-auto'
            : 'w-full h-48 md:h-full object-cover rounded-lg';
        card.innerHTML = `
            <div class="grid md:grid-cols-4 gap-6">
                <div class="md:col-span-1">
                    ${renderThumb(pub, imgClass, pub.imageAlt || 'Paper')}
                </div>
                <div class="md:col-span-3">
                    <h4 class="text-lg font-semibold text-gray-800 mb-2">${pub.title}</h4>
                    <p class="text-sm text-gray-600 mb-2">${pub.authors}</p>
                    <p class="text-sm text-gray-500 mb-2"><em>${pub.venue}</em></p>
                    <div class="flex flex-wrap gap-x-4 gap-y-1 text-sm">${buildPublicationLinks(pub)}</div>
                </div>
            </div>`;
        return card;
    }

    function renderPatentCard(pat) {
        const isGranted = pat.status === 'granted';
        const statusClass = isGranted ? 'text-green-600' : 'text-yellow-600';
        const statusIcon = isGranted ? 'fa-check-circle' : 'fa-clock';
        const card = document.createElement('div');
        card.className = 'patent-item bg-gray-50 rounded-lg p-4 sm:p-6 mt-6';
        card.innerHTML = `
            <div class="grid md:grid-cols-4 gap-6">
                <div class="md:col-span-1">
                    ${renderThumb(pat, 'w-full h-40 object-cover object-top rounded-lg', 'patents')}
                </div>
                <div class="md:col-span-3">
                    <div class="flex-1">
                        <h4 class="font-semibold text-gray-800 mb-2">${pat.title}</h4>
                        <p class="text-sm text-gray-600 mb-2">Patent No: ${pat.patentNo}</p>
                        <p class="text-sm text-gray-600 mb-2">Inventors: ${pat.inventors}</p>
                        <div class="mt-3 flex items-center text-sm ${statusClass}">
                            <i class="fas ${statusIcon} mr-1"></i>
                            <span>${pat.statusText}</span>
                        </div>
                    </div>
                </div>
            </div>`;
        return card;
    }

    // 渲染主论文列表
    const publicationsList = document.getElementById('publicationsList');
    if (publicationsList && Array.isArray(window.publicationsData)) {
        window.publicationsData.forEach(pub => publicationsList.appendChild(renderPublicationCard(pub)));
    }

    // 渲染专利列表
    const patentsList = document.getElementById('patentsList');
    if (patentsList && Array.isArray(window.patentsData)) {
        window.patentsData.forEach(pat => patentsList.appendChild(renderPatentCard(pat)));
    }

    // 展开/折叠专利列表（数据来自 data.js 的 additionalPatentsData）
    const togglePatentsButton = document.querySelector('#togglePatents');
    const additionalPatentsContainer = document.querySelector('#additionalPatents');
    let patentsExpanded = false;

    function loadMorePatents() {
        const extraPatents = Array.isArray(window.additionalPatentsData) ? window.additionalPatentsData : [];
        extraPatents.forEach(pat => additionalPatentsContainer.appendChild(renderPatentCard(pat)));

        const collapseButtonContainer = document.createElement('div');
        collapseButtonContainer.className = 'text-center mt-8 pt-6 border-t border-gray-200';

        const collapseButton = document.createElement('button');
        collapseButton.className = 'inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors';
        collapseButton.innerHTML = '<i class="fas fa-chevron-up mr-2"></i>Collapse Patent List';

        collapseButtonContainer.appendChild(collapseButton);
        additionalPatentsContainer.appendChild(collapseButtonContainer);

        collapseButton.addEventListener('click', function(e) {
            e.preventDefault();
            additionalPatentsContainer.style.display = 'none';
            if (togglePatentsButton) {
                togglePatentsButton.innerHTML = '<i class="fas fa-chevron-down mr-2"></i>Show more';
                togglePatentsButton.style.display = 'inline-flex';
                patentsExpanded = false;
                togglePatentsButton.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    if (togglePatentsButton && additionalPatentsContainer) {
        // 没有可折叠的专利时隐藏按钮
        if (!Array.isArray(window.additionalPatentsData) || window.additionalPatentsData.length === 0) {
            togglePatentsButton.style.display = 'none';
        }
        togglePatentsButton.addEventListener('click', function(e) {
            e.preventDefault();
            if (!patentsExpanded) {
                if (additionalPatentsContainer.children.length === 0) {
                    loadMorePatents();
                }
                additionalPatentsContainer.style.display = 'block';
                this.style.display = 'none';
                patentsExpanded = true;
                setTimeout(() => {
                    additionalPatentsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        });
    }

    // ====== 科研合作（Collaboration）：从 data.js 渲染 ======
    function renderCollaborationMember(m, accent, defaultIcon) {
        const avatar = m.photo
            ? `<img src="${m.photo}" alt="${m.name}" loading="lazy" decoding="async"${dimAttr(m.photo)} class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">`
            : `<div class="w-24 h-24 rounded-full mx-auto mb-4 bg-${accent}-100 flex items-center justify-center">
                    <i class="fas ${m.icon || defaultIcon || 'fa-user'} text-${accent}-600 text-2xl"></i>
                </div>`;
        const nameLink = m.url || m.homepage;
        const nameHtml = nameLink
            ? `<a href="${nameLink}" class="hover:text-${accent}-600 transition-colors" target="_blank" rel="noopener noreferrer">${m.name}</a>`
            : m.name;
        const roleHtml = m.role ? `<p class="text-${accent}-600 text-sm mb-2 text-center">${m.role}</p>` : '';
        const noteHtml = m.note ? `<p class="text-gray-600 text-sm leading-relaxed">${m.note}</p>` : '';
        const homeHtml = m.homepage
            ? `<div class="mt-3"><a href="${m.homepage}" class="text-${accent}-600 hover:text-${accent}-800 text-sm" target="_blank" rel="noopener noreferrer"><i class="fas fa-globe mr-1"></i>Homepage</a></div>`
            : '';
        const card = document.createElement('div');
        card.className = 'bg-gray-50 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-md';
        card.innerHTML = `
            ${avatar}
            <h4 class="text-lg font-semibold text-gray-800 mb-1">${nameHtml}</h4>
            ${roleHtml}
            ${noteHtml}
            ${homeHtml}`;
        return card;
    }

    function renderCollaboration() {
        const container = document.getElementById('collaborationList');
        if (!container || !Array.isArray(window.collaborationData)) return;
        window.collaborationData.forEach((sec, idx) => {
            const isLast = idx === window.collaborationData.length - 1;
            const group = document.createElement('div');
            group.className = isLast ? '' : 'mb-10';
            group.innerHTML = `
                <h3 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <i class="fas ${sec.icon} text-${sec.accent}-600 mr-2"></i>${sec.title}
                </h3>`;
            const members = Array.isArray(sec.members) ? sec.members : [];
            if (members.length === 0) {
                const placeholder = document.createElement('p');
                placeholder.className = 'text-gray-400 text-sm italic';
                placeholder.textContent = 'To be updated.';
                group.appendChild(placeholder);
            } else {
                const grid = document.createElement('div');
                grid.className = 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6';
                members.forEach(m => grid.appendChild(renderCollaborationMember(m, sec.accent, sec.memberIcon)));
                group.appendChild(grid);
            }
            container.appendChild(group);
        });
    }
    renderCollaboration();

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

    // 动态加载更多论文功能（数据来自 data.js 的 additionalPublicationsData）
    function loadMorePublications() {
        const additionalContainer = document.querySelector('#additionalPublications');

        const extraPubs = Array.isArray(window.additionalPublicationsData) ? window.additionalPublicationsData : [];

        // 创建新的论文条目
        extraPubs.forEach(pub => {
            additionalContainer.appendChild(renderPublicationCard(pub));
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
        
        #backToTop {
            transition: all 0.3s ease;
        }
        
        #backToTop:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }
    `;
    document.head.appendChild(style);

    // 访问统计：仅当不蒜子成功返回数值时才显示统计行（失败则保持隐藏）
    (function revealSiteStats() {
        const statsEl = document.getElementById('siteStats');
        const pvEl = document.getElementById('busuanzi_value_site_pv');
        if (!statsEl || !pvEl) return;
        let tries = 0;
        const timer = setInterval(function() {
            tries++;
            const val = (pvEl.textContent || '').trim();
            if (val && val !== '0' && /\d/.test(val)) {
                statsEl.style.display = '';
                clearInterval(timer);
            } else if (tries >= 20) { // 约 10s 仍无数据则放弃
                clearInterval(timer);
            }
        }, 500);
    })();

    // 右侧浮动目录（scrollspy）：根据滚动位置高亮当前所在区块
    (function initSectionToc() {
        const tocLinks = document.querySelectorAll('#sectionToc a[href^="#"]');
        if (!tocLinks.length) return;

        const linkById = {};
        const sections = [];
        tocLinks.forEach(a => {
            const id = a.getAttribute('href').slice(1);
            const el = document.getElementById(id);
            if (el) {
                linkById[id] = a;
                sections.push(el);
            }
        });
        if (!sections.length) return;

        const spy = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    tocLinks.forEach(a => a.classList.remove('is-active'));
                    const link = linkById[entry.target.id];
                    if (link) link.classList.add('is-active');
                }
            });
        }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

        sections.forEach(s => spy.observe(s));
    })();

    // 页脚版权年份：自动取当前年份
    const copyrightYearEl = document.getElementById('copyrightYear');
    if (copyrightYearEl) {
        copyrightYearEl.textContent = new Date().getFullYear();
    }

    console.log('个人主页初始化完成');
});