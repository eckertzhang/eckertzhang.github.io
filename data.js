// ============================================================================
// 页面数据（论文 / 专利）
// 只需在这里增删条目即可，卡片会由 script.js 自动渲染。
//
// 论文字段说明：
//   image    : 缩略图路径（必填）
//   imageAlt : 图片 alt 文本（可选，默认 "Paper"）
//   title    : 论文标题（必填）
//   authors  : 作者 HTML 字符串（可含 <a>/<strong>/<span class="author-mark"> 等）
//   venue    : 发表信息（会自动包裹在 <em> 里，可含 <strong>）
//   page/pdf/code/video/bibtex : 各类链接 URL，留空或删除则该按钮不显示
// ============================================================================

window.publicationsData = [
    {
        image: "./papers/2026_VoxelasMemory/Voxel_as_Memory.jpg",
        title: "Voxel as Memory: Long video generation with 4D voxel control",
        authors: `<a href="https://bestzzhang.github.io/" target="_blank" rel="noopener noreferrer">Zhiyuan Zhang</a>, <strong>Jingbo Zhang</strong>, <a href="https://scholars.cityu.edu.hk/en/persons/zhithuang2/" target="_blank" rel="noopener noreferrer">Zhitong Huang</a>, <a href="https://scholars.cityu.edu.hk/en/persons/qisun45/" target="_blank" rel="noopener noreferrer">Qi Sun</a>, <a href="https://hetolin.github.io/" target="_blank" rel="noopener noreferrer">Haitao Lin</a>, <a>Shenghao Zhang</a>, <a>Yuzhen Liu</a>, <a href="https://www.cityu.edu.hk/stfprofile/jingliao.htm" target="_blank" rel="noopener noreferrer">Jing Liao</a>`,
        venue: `Under review, 2026`, // alt: Conference on Robot Learning (<strong>CoRL</strong>), 2026
        page: "https://bestzzhang.github.io/VAM/",
    },
    {
        image: "./papers/2026_GeniWorld/GeniWorld.png",
        title: "GeniWorld: A Generalizable Interactive World Model for Robotic Manipulation via Visual Actions",
        authors: `<a href="https://scholar.google.com.hk/citations?user=v1NkCl0AAAAJ&hl=zh-CN&oi=sra" target="_blank" rel="noopener noreferrer">Chenghao Gu</a><span class="author-mark">*</span>, <a href="https://hanyangyu1021.github.io/" target="_blank" rel="noopener noreferrer">Hanyang Yu</a><span class="author-mark">*</span>, <strong>Jingbo Zhang</strong><span class="author-mark"><i class="fas fa-envelope" aria-hidden="true"></i></span>, <a href="https://hetolin.github.io/" target="_blank" rel="noopener noreferrer">Haitao Lin</a>, <a href="https://zhangwenyao1.github.io/" target="_blank" rel="noopener noreferrer">Wenyao Zhang</a>, <a>Jinghe Wang</a>, <a>Hanglei Jin</a>, <a>Shuzhao Xie</a>, <a>Jingyan Jiang</a>, <a>Zhi Wang</a><span class="author-mark"><i class="fas fa-envelope" aria-hidden="true"></i></span>`,
        venue: `Under review, 2026`, // alt: Conference on Robot Learning (<strong>CoRL</strong>), 2026
        pdf: "https://arxiv.org/pdf/2608.06332",
        bibtex: "./papers/2026_GeniWorld/gu2026geniworld.bib",
    },
    {
        image: "./papers/2026_ImageWAM/imagewam.png",
        title: "ImageWAM: Do World Action Models Really Need Video Generation, or Just Image Editing?",
        authors: `<a href="https://scholar.google.com.hk/citations?hl=zh-CN&user=v_6ZAw0AAAAJ" target="_blank" rel="noopener noreferrer">Yuyang Zhang</a>, <a href="https://zhangwenyao1.github.io/" target="_blank" rel="noopener noreferrer">Wenyao Zhang</a>, <a href="https://qizekun.github.io/" target="_blank" rel="noopener noreferrer">Zekun Qi</a>, <a href="https://cghezhang.github.io/" target="_blank" rel="noopener noreferrer">He Zhang</a>, <a href="https://hetolin.github.io/" target="_blank" rel="noopener noreferrer">Haitao Lin</a>, <strong>Jingbo Zhang</strong>, <a>Zhibo Chen</a>, <a>Yao Mu</a>, <a>Xiaokang Yang</a>, <a>Xin Jin</a>, <a>Wenjun Zeng</a>`,
        venue: `Under review, 2026`, // alt: Conference on Robot Learning (<strong>CoRL</strong>), 2026
        page: "https://zhangwenyao1.github.io/ImageWAM/",
        pdf: "https://arxiv.org/pdf/2606.19531",
        code: "https://github.com/yuyangalin/ImageWAM",
        bibtex: "./papers/2026_ImageWAM/zhang2026imagewam.bib",
    },
    {
        image: "./papers/2026_MaskWAM/maskwam.png",
        title: "MaskWAM: Unifying Mask Prompting and Prediction for World-Action Models",
        authors: `<a href="https://hanyangyu1021.github.io/" target="_blank" rel="noopener noreferrer">Hanyang Yu</a>, <a href="https://hetolin.github.io/" target="_blank" rel="noopener noreferrer">Haitao Lin</a>, <strong>Jingbo Zhang</strong>, <a href="https://zhangwenyao1.github.io/" target="_blank" rel="noopener noreferrer">Wenyao Zhang</a>, <a href="https://chenghaogu.github.io/" target="_blank" rel="noopener noreferrer">Chenghao Gu</a>, <a href="https://hengli.me/" target="_blank" rel="noopener noreferrer">Heng Li</a>, <a href="https://ece.hkust.edu.hk/pingtan" target="_blank" rel="noopener noreferrer">Ping Tan</a>`,
        venue: `Under review, 2026`, // alt: Conference on Robot Learning (<strong>CoRL</strong>), 2026
        page: "https://hanyangyu1021.github.io/maskwam.github.io/",
        pdf: "https://arxiv.org/pdf/2606.13515",
        code: "https://github.com/hanyangyu1021/maskwam",
        video: "https://www.youtube.com/watch?v=x0tY7byEaF4",
        bibtex: "./papers/2026_MaskWAM/yu2026maskwam.bib",
    },
    {
        image: "./papers/2026_OEVLN/oevln.png",
        title: "OE-VLN: Benchmarking Open-Ended Vision-Language Navigation under Natural Human Instructions",
        authors: `<a>Jiaru Zhong</a>, <a>Yuxiang Yang</a>, <a>Wei Cui</a>, <a>Junliang Chen</a>, <strong>Jingbo Zhang</strong>, <a href="https://huaiyuanxu.github.io/" target="_blank" rel="noopener noreferrer">Huaiyuan Xu</a>, <a>Jiahui Xu</a>, <a>Yijie Guo</a>, <a>Yi Wang</a>, <a>Qiang Zhang</a>, <a>Lap-Pui Chau</a>`,
        venue: `Under review, 2026`,
    },
    {
        image: "./papers/2025_da4d/da4d.gif",
        title: "DetAny4D: Detect Anything 4D Temporally in a Streaming RGB Video",
        authors: `<a href="https://jarvishou829.github.io/" target="_blank" rel="noopener noreferrer">Jiawei Hou</a>, <a>Shenghao Zhang</a><span class="author-mark"><i class="fas fa-envelope" aria-hidden="true"></i></span>, <a href="https://cassiepython.github.io/" target="_blank" rel="noopener noreferrer">Can Wang</a>, <a href="https://edward3862.github.io/" target="_blank" rel="noopener noreferrer">Zheng Gu</a>, <a>Yonggen Ling</a>, <a>Taiping Zeng</a>, <a>Xiangyang Xue</a><span class="author-mark"><i class="fas fa-envelope" aria-hidden="true"></i></span>, <strong>Jingbo Zhang</strong><span class="author-mark"><i class="fas fa-envelope" aria-hidden="true"></i></span>`,
        venue: `IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>), 2026`,
        page: "https://jarvishou829.github.io/DA4D/",
        pdf: "https://arxiv.org/pdf/2511.18814",
        bibtex: "./papers/2025_da4d/hou2025detany4d.bib",
    },
    {
        image: "./papers/2025_wordcraft/font-teaser-new.png",
        title: "WordCraft: Interactive Artistic Typography with Attention Awareness and Noise Blending",
        authors: `Zhe Wang, <strong>Jingbo Zhang</strong>, <a href="https://scholar.google.com/citations?user=-wfXmM4AAAAJ&hl=zh-CN" target="_blank" rel="noopener noreferrer">Tianyi Wei</a>, <a href="https://cassiepython.github.io/" target="_blank" rel="noopener noreferrer">Can Wang</a>, <a href="https://research.monash.edu/en/persons/wanchao-su" target="_blank" rel="noopener noreferrer">Wanchao Su</a>`,
        venue: `arXiv preprint arXiv:2507.09573, 2025`,
        pdf: "https://arxiv.org/pdf/2507.09573",
        bibtex: "./papers/2025_wordcraft/wang2025wordcraft.bib",
    },
    {
        image: "./papers/2025_tairos/perception.png",
        title: "TAIROS: An Embodied AI Platform for Robotics Applications",
        authors: `Tencent Robotics X Team & Futian Laboratory, Shenzhen`,
        venue: `TAIROS Technical Report, 2025`,
        page: "https://tairos.tencent.com/",
        pdf: "https://cdn.tairos.tencent-cloud.com/downloads/tools/pdf/tairos.pdf",
        code: "https://tairos.tencent.com/docs/models/perception/sdk_download",
    },
    {
        image: "./papers/2025_3d_editing/overview.jpg",
        title: "Generative object insertion in gaussian splatting with a multi-view diffusion model",
        authors: `<a href="https://github.com/JiuTongBro" target="_blank" rel="noopener noreferrer">Hongliang Zhong</a>, <a href="https://cassiepython.github.io/" target="_blank" rel="noopener noreferrer">Can Wang</a>, <strong>Jingbo Zhang</strong>, <a href="https://www.cityu.edu.hk/stfprofile/jingliao.htm" target="_blank" rel="noopener noreferrer">Jing Liao</a>`,
        venue: `Visual Informatics, 2025`,
        pdf: "https://doi.org/10.1016/j.visinf.2025.100238",
        bibtex: "./papers/2025_3d_editing/zhong2025generative.bib",
    },
    {
        image: "./papers/2025_HumanRef-GS/2025_humanref-gs.gif",
        title: "HumanRef-GS: Image-to-3D Human Generation With Reference-Guided Diffusion and 3D Gaussian Splatting",
        authors: `<strong>Jingbo Zhang</strong>, <a href="https://xiaoyu258.github.io/" target="_blank" rel="noopener noreferrer">Xiaoyu Li</a>, <a href="https://github.com/JiuTongBro" target="_blank" rel="noopener noreferrer">Hongliang Zhong</a>, <a href="https://qzhang-cv.github.io/" target="_blank" rel="noopener noreferrer">Qi Zhang</a>, <a href="https://yanpei.me/" target="_blank" rel="noopener noreferrer">Yanpei Cao</a>, <a href="https://scholar.google.com/citations?user=4oXBp9UAAAAJ&hl=zh-CN" target="_blank" rel="noopener noreferrer">Ying Shan</a>, <a href="https://www.cityu.edu.hk/stfprofile/jingliao.htm" target="_blank" rel="noopener noreferrer">Jing Liao</a>`,
        venue: `IEEE Transactions on Circuits and Systems for Video Technology (<strong>TCSVT</strong>), 2025`,
        page: "https://eckertzhang.github.io/HumanRef.github.io/",
        pdf: "https://ieeexplore.ieee.org/abstract/document/10879794",
        bibtex: "./papers/2025_HumanRef-GS/zhang2025humanref.bib",
    },
    {
        image: "./papers/2024_3D_Survey/survey.jpg",
        imageAlt: "Survey Paper",
        title: "Advances in 3D Generation: A Survey",
        authors: `<a href="https://xiaoyu258.github.io/" target="_blank" rel="noopener noreferrer">Xiaoyu Li</a>, <a href="https://qzhang-cv.github.io/" target="_blank" rel="noopener noreferrer">Qi Zhang</a>, <a href="https://scholar.google.com.hk/citations?user=2ztThPwAAAAJ&hl=zh-CN" target="_blank" rel="noopener noreferrer">Di Kang</a>, <a href="https://scholar.google.com/citations?user=gP-UxcoAAAAJ" target="_blank" rel="noopener noreferrer">Weihao Cheng</a>, <a href="https://scholar.google.com/citations?user=UvvufgQAAAAJ&hl=zh-CN" target="_blank" rel="noopener noreferrer">Yiming Gao</a>, <strong>Jingbo Zhang</strong>, <a href="https://lzhnb.github.io/" target="_blank" rel="noopener noreferrer">Zhihao Liang</a>, <a href="https://www.cityu.edu.hk/stfprofile/jingliao.htm" target="_blank" rel="noopener noreferrer">Jing Liao</a>, <a href="https://yanpei.me/" target="_blank" rel="noopener noreferrer">Yanpei Cao</a>, <a href="https://scholar.google.com/citations?user=4oXBp9UAAAAJ&hl=zh-CN" target="_blank" rel="noopener noreferrer">Ying Shan</a>`,
        venue: `arXiv preprint arXiv:2401.17807, 2024`,
        pdf: "https://arxiv.org/pdf/2401.17807.pdf",
        bibtex: "./papers/2024_3D_Survey/li2024advances.bib",
    },
    {
        image: "./papers/2024_tpami/ict_pami.png",
        title: "High-Fidelity and Efficient Pluralistic Image Completion With Transformers",
        authors: `<a href="http://raywzy.com/" target="_blank" rel="noopener noreferrer">Ziyu Wan</a>, <strong>Jingbo Zhang</strong>, <a href="http://www.dongdongchen.bid/" target="_blank" rel="noopener noreferrer">Dongdong Chen</a>, <a href="https://www.cityu.edu.hk/stfprofile/jingliao.htm" target="_blank" rel="noopener noreferrer">Jing Liao</a>`,
        venue: `IEEE Transactions on Pattern Analysis and Machine Intelligence (<strong>TPAMI</strong>), 2024`,
        page: "http://raywzy.com/ICT/",
        pdf: "https://ieeexplore.ieee.org/document/10591425",
        code: "https://github.com/raywzy/ICT",
        bibtex: "./papers/2024_tpami/wan2024high.bib",
    },
    {
        image: "./papers/2023_HumanRef/teaser.gif",
        title: "HumanRef: Single Image to 3D Human Generation via Reference-Guided Diffusion",
        authors: `<strong>Jingbo Zhang</strong>, <a href="https://xiaoyu258.github.io/" target="_blank" rel="noopener noreferrer">Xiaoyu Li</a>, <a href="https://qzhang-cv.github.io/" target="_blank" rel="noopener noreferrer">Qi Zhang</a>, <a href="https://yanpei.me/" target="_blank" rel="noopener noreferrer">Yanpei Cao</a>, <a href="https://scholar.google.com/citations?user=4oXBp9UAAAAJ&hl=zh-CN" target="_blank" rel="noopener noreferrer">Ying Shan</a>, <a href="https://www.cityu.edu.hk/stfprofile/jingliao.htm" target="_blank" rel="noopener noreferrer">Jing Liao</a>`,
        venue: `IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>), 2024`,
        page: "https://eckertzhang.github.io/HumanRef.github.io/",
        pdf: "https://arxiv.org/pdf/2311.16961.pdf",
        code: "https://github.com/eckertzhang/HumanRef",
        video: "https://youtu.be/4R3iaamYwa8",
        bibtex: "./papers/2023_HumanRef/zhang2023humanref.bib",
    },
    {
        image: "./papers/2023_VQ-NeRF/teaser.gif",
        title: "VQ-NeRF: Neural Reflectance Decomposition and Editing with Vector Quantization",
        authors: `<a href="https://github.com/JiuTongBro" target="_blank" rel="noopener noreferrer">Hongliang Zhong</a>, <strong>Jingbo Zhang</strong>, <a href="https://www.cityu.edu.hk/stfprofile/jingliao.htm" target="_blank" rel="noopener noreferrer">Jing Liao</a>`,
        venue: `IEEE Transactions on Visualization and Computer Graphics (<strong>TVCG</strong>), 2023`,
        page: "https://jtbzhl.github.io/VQ-NeRF.github.io/",
        pdf: "https://arxiv.org/pdf/2310.11864.pdf",
        code: "https://github.com/JiuTongBro/vqnerf_release",
        video: "https://youtu.be/-kIHOV28ukk",
        bibtex: "./papers/2023_AvatarCraft/zhong2023vq.bib",
    },
    {
        image: "./papers/2023_Text2NeRF/teaser.gif",
        title: "Text2NeRF: Text-Driven 3D Scene Generation with Neural Radiance Fields",
        authors: `<strong>Jingbo Zhang</strong>, <a href="https://xiaoyu258.github.io/" target="_blank" rel="noopener noreferrer">Xiaoyu Li</a>, <a href="http://raywzy.com/" target="_blank" rel="noopener noreferrer">Ziyu Wan</a>, <a href="https://cassiepython.github.io/" target="_blank" rel="noopener noreferrer">Can Wang</a>, <a href="https://www.cityu.edu.hk/stfprofile/jingliao.htm" target="_blank" rel="noopener noreferrer">Jing Liao</a>`,
        venue: `IEEE Transactions on Visualization and Computer Graphics (<strong>TVCG</strong>), 2023`,
        page: "https://eckertzhang.github.io/Text2NeRF.github.io/",
        pdf: "https://arxiv.org/pdf/2305.11588.pdf",
        code: "https://github.com/eckertzhang/Text2NeRF",
        video: "https://youtu.be/G3xiabqcv3E",
        bibtex: "./papers/2023_Text2NeRF/zhang2023text2nerf.bib",
    },
    {
        image: "./papers/2023_AvatarCraft/teaser.gif",
        title: "AvatarCraft: Transforming Text into Neural Human Avatars with Parameterized Shape and Pose Control",
        authors: `<a href="https://j-rx.com/" target="_blank" rel="noopener noreferrer">Ruixiang Jiang</a>, <a href="https://cassiepython.github.io/" target="_blank" rel="noopener noreferrer">Can Wang</a>, <strong>Jingbo Zhang</strong>, <a href="https://mlchai.com/" target="_blank" rel="noopener noreferrer">Menglei Chai</a>, <a href="https://mingminghe.com/" target="_blank" rel="noopener noreferrer">Mingming He</a>, <a href="https://www.dongdongchen.bid/" target="_blank" rel="noopener noreferrer">Dongdong Chen</a>, <a href="https://www.cityu.edu.hk/stfprofile/jingliao.htm" target="_blank" rel="noopener noreferrer">Jing Liao</a>`,
        venue: `IEEE International Conference on Computer Vision (<strong>ICCV</strong>), 2023`,
        page: "https://avatar-craft.github.io/",
        pdf: "https://arxiv.org/pdf/2303.17606.pdf",
        code: "https://github.com/songrise/avatarcraft",
        video: "https://youtu.be/GXPjdN-UF04",
        bibtex: "./papers/2023_AvatarCraft/jiang2023avatarcraft.bib",
    },
    {
        image: "./papers/2022_FDNeRF/FDNeRF.gif",
        title: "FDNeRF: Few-shot Dynamic Neural Radiance Fields for Face Reconstruction and Expression Editing",
        authors: `<strong>Jingbo Zhang</strong>, <a href="https://xiaoyu258.github.io/" target="_blank" rel="noopener noreferrer">Xiaoyu Li</a>, <a href="http://raywzy.com/" target="_blank" rel="noopener noreferrer">Ziyu Wan</a>, <a href="https://cassiepython.github.io/" target="_blank" rel="noopener noreferrer">Can Wang</a>, <a href="https://www.cityu.edu.hk/stfprofile/jingliao.htm" target="_blank" rel="noopener noreferrer">Jing Liao</a>`,
        venue: `<strong>SIGGRAPH Asia</strong>, 2022`,
        page: "https://fdnerf.github.io/",
        pdf: "https://arxiv.org/pdf/2208.05751.pdf",
        code: "https://github.com/FDNeRF/FDNeRF",
        video: "https://www.youtube.com/embed/at_42ekU0I0",
        bibtex: "./papers/2022_FDNeRF/zhang2022fdnerf.bib",
    },
    {
        image: "./papers/2022_texture_opti/texture_opti.gif",
        title: "Adaptive Joint Optimization for 3D Reconstruction with Differentiable Rendering",
        authors: `<strong>Jingbo Zhang</strong>, <a href="http://raywzy.com/" target="_blank" rel="noopener noreferrer">Ziyu Wan</a>, <a href="https://www.cityu.edu.hk/stfprofile/jingliao.htm" target="_blank" rel="noopener noreferrer">Jing Liao</a>`,
        venue: `IEEE Transactions on Visualization and Computer Graphics (<strong>TVCG</strong>), 2022`,
        page: "https://adjointopti.github.io/adjoin.github.io/",
        pdf: "https://arxiv.org/pdf/2208.07003.pdf",
        code: "https://github.com/adjointopti/ADJOIN",
        bibtex: "./papers/2022_texture_opti/zhang2022adaptive.bib",
    },
    {
        image: "./papers/2021_ICT/ICT.png",
        title: "High-Fidelity Pluralistic Image Completion with Transformers",
        authors: `<a href="http://raywzy.com/" target="_blank" rel="noopener noreferrer">Ziyu Wan</a>, <strong>Jingbo Zhang</strong>, <a href="http://www.dongdongchen.bid/" target="_blank" rel="noopener noreferrer">Dongdong Chen</a>, <a href="https://www.cityu.edu.hk/stfprofile/jingliao.htm" target="_blank" rel="noopener noreferrer">Jing Liao</a>`,
        venue: `IEEE International Conference on Computer Vision (<strong>ICCV</strong>), 2021`,
        page: "http://raywzy.com/ICT",
        pdf: "https://arxiv.org/pdf/2103.14031.pdf",
        code: "https://github.com/raywzy/ICT",
        bibtex: "./papers/2021_ICT/wan2021high.bib",
    },
];

// 点击 "Show more" 后额外展示的论文
window.additionalPublicationsData = [
    {
        image: "./papers/2019_beta_wavelet/beta_wavelet.jpg",
        title: "A multiple beta wavelet-based locally regularized ultraorthogonal forward regression algorithm for time-varying system identification with applications to EEG",
        authors: `Yang Li, <strong>Jingbo Zhang</strong>, Weigang Cui, Heng Yuan, Hualiang Wei`,
        venue: `IEEE Transactions on Instrumentation and Measurement (<strong>TIM</strong>), 2019`,
        pdf: "https://eprints.whiterose.ac.uk/144526/1/IEEE-IM%20Accepted%20Paper%20%28Accepetd%2014-03-2019%29.pdf",
        bibtex: "./papers/2019_beta_wavelet/li2019multiple.bib",
    },
];

// ============================================================================
// 专利字段说明：
//   image      : 缩略图路径
//   title      : 专利名称
//   patentNo   : 专利号
//   inventors  : 发明人 HTML 字符串（可用 <b> 标注本人）
//   status     : "granted"（已授权，绿色勾）或 "review"（审查中，黄色时钟）
//   statusText : 状态文案
// ============================================================================

window.patentsData = [
    {
        image: "./patents/CN201711305025_FullTextImage1.png",
        title: "一种基于beta小波基函数展开的时变非线性系统快速辨识方法",
        patentNo: "CN107967395A",
        inventors: `Yang Li, <b>Jingbo Zhang</b>, Weigang Cui, Song Xu, Qinglei Hu`,
        status: "granted",
        statusText: "Granted (2018-04-27)",
    },
    {
        image: "./patents/CN108509933A.PDF.png",
        title: "一种基于多小波基函数展开的锋电位时变格兰杰因果准确辨识方法",
        patentNo: "CN108509933A",
        inventors: `Yang Li, Daxin Hao, <b>Jingbo Zhang</b>`,
        status: "granted",
        statusText: "Granted (2018-09-07)",
    },
    {
        image: "./patents/DecAny4d.png",
        title: "一种面向视频输入的端到端开放集4D目标检测方法",
        patentNo: "2025120130CN",
        inventors: `<b>Jingbo Zhang</b>, Jiawei Hou, Shenghao Zhang, Minglei Lu, Yonggen Ling, Haitao Lin, Yuzhen Liu`,
        status: "review",
        statusText: "Under Review (Applied 2025-12-03)",
    },
];

// 折叠区（点击 "Show more" 后展开显示）的专利，写法与 patentsData 完全一致
window.additionalPatentsData = [
    {
        image: "./patents/2025120878CN.png",
        title: "一种面向机器人操作的端到端开放词汇3D视觉语言模型",
        patentNo: "2025120878CN",
        inventors: `Haitao Lin, Jingshun Huang, Cheng Zhou, Yonggen Ling, He Zhang, Minglei Lu, <b>Jingbo Zhang</b>`,
        status: "review",
        statusText: "Under Review (Applied 2025-12-31)",
    },
    {
        image: "./patents/2025120018CN.png",
        title: "一种基于全局多路优化的RGB视频6D位姿数据集标注方法",
        patentNo: "2025120018CN",
        inventors: `Minglei Lu, Yonggen Ling, Shenghao Zhang, Yuzhen Liu, Haitao Lin, <b>Jingbo Zhang</b>`,
        status: "review",
        statusText: "Under Review (Applied 2025-12-01)",
    },
    {
        image: "./patents/2025110345CN.png",
        title: "一种基于动捕系统的机械臂运动学标定方法",
        patentNo: "2025110345CN",
        inventors: `Minglei Lu, Yonggen Ling, <b>Jingbo Zhang</b>, Lingzhu Xiang, Junning Qiu`,
        status: "review",
        statusText: "Under Review (Applied 2025-11-20)",
    },
    {
        image: "./patents/202511942210.7.png",
        title: "基于视觉语言模型引导的机器人探索策略",
        patentNo: "2025080364CN",
        inventors: `Yuzhen Liu, Zhitong Huang, <b>Jingbo Zhang</b>, Zibo Zhang`,
        status: "review",
        statusText: "Under Review (Applied 2025-09-25)",
    },
];

// ============================================================================
// 科研合作（Collaboration Tab）
// 每个分组字段：
//   title      : 分组标题（如 Supervisors / Collaborators / Interns）
//   icon       : 分组标题图标（Font Awesome，如 fa-user-tie）
//   accent     : 主题色（blue / green / purple 等 Tailwind 颜色名）
//   memberIcon : 该组成员默认头像图标（可选，默认 fa-user）
//   members    : 成员数组，空数组则显示 "To be updated."
// 成员字段（除 name 外均可选，留空则不显示）：
//   name     : 姓名（必填）
//   url      : 姓名指向的链接（可选；不填则自动复用 homepage）
//   role     : 角色 / 单位（如 "Professor, CityU" 或 "Affiliation · Duration"）
//   note     : 一句话备注（如 "My Ph.D. advisor."）
//   homepage : 显示为 "Homepage" 的链接
//   photo    : 头像图片路径（填了则用照片，否则用 memberIcon 图标）
//   icon     : 单独覆盖该成员的头像图标（可选）
// ============================================================================

window.collaborationData = [
    {
        title: "Supervisors",
        icon: "fa-user-tie",
        accent: "blue",
        memberIcon: "fa-user-tie",
        members: [
            {
                name: "Jing Liao",
                photo: "./Collaboration/Photos/jingliao_STF.jpg",
                role: "Associate Professor<br>Department of Computer Science<br>City University of Hong Kong",
                note: "My Ph.D. advisor.",
                homepage: "https://www.cityu.edu.hk/stfprofile/jingliao.htm",
            },
            {
                name: "Xiaoyu Li",
                photo: "./Collaboration/Photos/lixiaoyu.png",
                role: "Senior Algorithm Expert<br>ATH, Qwen Business Unit<br>Alibaba",
                note: "Research mentor.",
                homepage: "https://xiaoyu258.github.io/",
            },
        ],
    },
    {
        title: "Collaborators",
        icon: "fa-users",
        accent: "amber",
        memberIcon: "fa-user",
        members: [
            {
                name: "Ziyu Wan",
                photo: "./Collaboration/Photos/wanziyu.jpg",
                role: "Technical Staff<br>Microsoft AI Superintelligence", 
                homepage: "http://raywzy.com/" 
            },
            {
                name: "Can Wang",
                photo: "./Collaboration/Photos/wangcan.png",
                role: "Postdoctoral Fellow<br>The University of Hong Kong", 
                homepage: "https://cassiepython.github.io/" 
            },
            {
                name: "Wanchao Su",
                photo: "./Collaboration/Photos/suwanchao.jpeg",
                role: "Research Fellow<br>Monash University", 
                homepage: "https://ansire.github.io/" 
            },
            {
                name: "Zheng Gu",
                photo: "./Collaboration/Photos/guzheng.png",
                role: "Assistant Professor<br>Shenzhen University", 
                homepage: "https://edward3862.github.io/" 
            },
            {
                name: "Zhiyuan Zhang",
                photo: "./Collaboration/Photos/zhangzhiyuan.png",
                role: "Ph.D. Student<br>City University of Hong Kong", 
                homepage: "https://bestzzhang.github.io/" 
            },
            {
                name: "Zhitong Huang",
                // photo: "",
                role: "Ph.D. Student<br>City University of Hong Kong", 
                homepage: "https://scholars.cityu.edu.hk/en/persons/zhithuang2/" 
            },
            {
                name: "Qi Sun",
                // photo: "",
                role: "Ph.D. Student<br>City University of Hong Kong", 
                homepage: "https://scholars.cityu.edu.hk/en/persons/qisun45/" 
            },
            {
                name: "Huaiyuan Xu",
                photo: "./Collaboration/Photos/xuhuaiyuan.png",
                role: "Postdoctoral Fellow<br>The Hong Kong Polytechnic University", 
                homepage: "https://huaiyuanxu.github.io/" 
            },
            {
                name: "Haitao Lin",
                photo: "./Collaboration/Photos/linhaitao.png",
                role: "Senior Researcher<br>Robotics X, Tencent", 
                homepage: "https://hetolin.github.io/" 
            },
            {
                name: "Wenyao Zhang",
                photo: "./Collaboration/Photos/zhangwenyao.png",
                role: "Senior Researcher", 
                homepage: "https://zhangwenyao1.github.io/" 
            },
            {
                name: "Shenghao Zhang",
                photo: "./Collaboration/Photos/zhangshenghao.png",
                role: "Senior Researcher<br>Robotics X, Tencent", 
                // homepage: "" 
            },
            {
                name: "Yuzhen Liu",
                photo: "./Collaboration/Photos/liuyuzhen.gif",
                role: "Senior Researcher", 
                homepage: "https://ieeexplore.ieee.org/author/37086560116" 
            },
            {
                name: "Minglei Lu",
                photo: "./Collaboration/Photos/luminglei.png",
                role: "Senior Researcher<br>Robotics X, Tencent", 
                homepage: "https://scholar.google.com/citations?user=jq2fvmIAAAAJ&hl=en" 
            },
            {
                name: "Hongliang Zhong",
                photo: "./Collaboration/Photos/zhonghongliang.png",
                role: "Ph.D. Student<br>Zhejiang University", 
                homepage: "https://github.com/JiuTongBro" 
            },
            {
                name: "Jichao Zhang",
                photo: "./Collaboration/Photos/zhangjichao.png",
                role: "Assistant Professor<br>Ocean University of China", 
                homepage: "https://zhangqianhui.github.io/" 
            },
            {
                name: "Weijie Wang",
                photo: "./Collaboration/Photos/wangweijie.jpeg",
                role: "Senior Researcher", 
                homepage: "https://scholar.google.com.hk/citations?hl=zh-CN&user=AtB0KFsAAAAJ" 
            },
            {
                name: "Lei Liu",
                photo: "./Collaboration/Photos/liulei.jpg",
                role: "Postdoctoral Fellow<br>The University of Hong Kong", 
                homepage: "https://scholar.google.com/citations?user=3FsuonEAAAAJ&hl=zh-CN" 
            },
            {
                name: "Hanyang Yu",
                photo: "./Collaboration/Photos/yuhanyang.jpg",
                role: "Ph.D. Student<br>Hong Kong University of Science and Technology", 
                homepage: "https://hanyangyu1021.github.io/" 
            },
            {
                name: "Yuyang Zhang",
                photo: "./Collaboration/Photos/zhangyuyang.png",
                role: "Ph.D. Student<br>Shanghai Jiao Tong University", 
                homepage: "https://scholar.google.com.hk/citations?hl=zh-CN&user=v_6ZAw0AAAAJ" 
            },
        ],
    },
    {
        title: "Interns",
        icon: "fa-user-graduate",
        accent: "purple",
        memberIcon: "fa-user-graduate",
        members: [
            {
                name: "Jiawei Hou",
                photo: "./Collaboration/Photos/houjiawei.png",
                role: "Ph.D. Student<br>Fudan University", 
                homepage: "https://jarvishou829.github.io/" 
            },
            {
                name: "Zhiyuan Zhang",
                photo: "./Collaboration/Photos/zhangzhiyuan.png",
                role: "Ph.D. Student<br>City University of Hong Kong", 
                homepage: "https://bestzzhang.github.io/" 
            },
            {
                name: "Chenghao Gu",
                // photo: "",
                role: "M.S. Student<br>Tsinghua University", 
                homepage: "https://scholar.google.com.hk/citations?hl=zh-CN&user=v1NkCl0AAAAJ" 
            },
            {
                name: "Yuxiang Yang",
                photo: "./Collaboration/Photos/yangyuxiang.png",
                role: "Ph.D. Student<br>The Hong Kong Polytechnic University", 
                homepage: "https://scholar.google.com.hk/citations?hl=zh-CN&user=uyiHu0kAAAAJ" 
            },
            {
                name: "Yu Liu",
                photo: "./Collaboration/Photos/liuyu.png",
                role: "Ph.D. Student<br>Jilin University", 
                homepage: "https://rainyrobo.github.io/" 
            },
            // 与他人共同指导、非本人实习生的学生，直接加在本组内，用 note 注明共同指导老师。示例：
            // {
            //     name: "Student Name",
            //     photo: "./Collaboration/Photos/xxx.jpg",   // 可选；无则显示图标
            //     role: "Ph.D. Student<br>University",
            //     note: "Co-advised with Prof. XXX.",         // 可选：共同指导信息
            //     homepage: "https://homepage",
            // },

        ],
    },
];
