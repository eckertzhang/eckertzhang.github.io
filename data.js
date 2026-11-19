// ============================================================================
// 页面数据（论文 / 专利）
// 只需在这里增删条目即可，卡片会由 script.js 自动渲染。
//
// 论文字段说明：
//   image    : 缩略图路径（必填）
//   imageAlt : 图片 alt 文本（可选，默认 "Paper"）
//   imageFit : 图片显示模式（可选）："cover"（默认，原始自适应填充，可能裁剪边缘）/ "contain"（完整显示、不裁剪）
//              / "fill"（忽略原图长宽比，统一拉伸缩放到 imageAspect，不裁剪但可能变形）
//   imageAspect : 配合 imageFit: "fill" 使用的目标长宽比（可选，默认 "16/10"；可写 "16/9"、"4/3"、"2" 等）
//   title    : 论文标题（必填）
//   authors  : 作者数组，每项一个字符串（必填），格式："姓名[后缀] [| 主页URL]"
//                "Haitao Lin | https://xxx.io/"     → 带主页链接
//                "Chengyu Miao"                     → 无主页，显示纯文本
//                "Jingbo Zhang"                     → 本人自动加粗
//              后缀可叠加：*  共同一作（Equal contribution）
//                          #  通讯作者（Corresponding author，显示为信封图标）
//                          +  项目负责人（Project lead，显示为 ‡）
//              例："Hanyang Yu*", "Jingbo Zhang#+"
//              也兼容旧写法：直接写整段 HTML 字符串（如团队署名）
//   venue    : 发表信息（会自动包裹在 <em> 里，可含 <strong>）
//   page/pdf/code/video/bibtex : 各类链接 URL，留空或删除则该按钮不显示
//   show     : 是否在页面上展示（可选，默认展示）；写 show: false 则隐藏该论文，条目仍保留在此处
//   pin      : 是否置顶（可选，默认不置顶）；写 pin: true 则排到列表最前面并加深背景色，
//              多篇置顶时按在本文件中的先后顺序排列（折叠区的论文置顶后也会移到主列表顶部）
// ============================================================================

window.publicationsData = [
    {
        image: "./papers/2026_SeGo-WAM/SeGo-WAM.webp",
        imageFit: "fill",
        title: "SeGo-WAM: Does Action Need Appearance? Semantics and Geometry Suffice",
        authors: [
            "Yu Liu", " Jialiang Zhang", "Haitao Lin+ | https://hetolin.github.io/",
            "Ziyi Cai", "Yanqi Bao", "Zhitong Huang", "He Zhang", "Shuo Wang",
            "zipei fan#", "Jingbo Zhang#+", 
        ],
        venue: `Under review, 2026`, // alt: IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>), 2027
        // page: "https://bestzzhang.github.io/VAM/",
        // show: false,
        pin: true,
    },
    {
        image: "./papers/2026_PhysVAM/PhysVAM.webp",
        imageFit: "fill",
        title: "PhysVAM: Physics-oriented Future Value Action Model for Dynamic Object Manipulation",
        authors: [
            "Yuxiang Yang", "Jingbo Zhang", "Jiaru Zhong",
            "Junliang Chen#", "Yirui Zhou", "Guangming Wang",
            "Haitao Lin | https://hetolin.github.io/", "Huaiyuan Xu#", "Yi Wang", "Lap-Pui Chau#",
        ],
        venue: `Under review, 2026`, // alt: IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>), 2027
        // page: "https://bestzzhang.github.io/VAM/",
    },
    {
        image: "./papers/2026_FlexART/FlexART.webp",
        imageFit: "fill",
        title: "FlexART: A Unified MLLM for 3D Articulation Understanding with Flexible Prompting",
        authors: [
            "Chaoqun Ma", "Mengqi Rong", "Yining Yang", "Minglei Lu", "Jingbo Zhang+", "Shuhan Shen#",
        ],
        venue: `Under review, 2026`, // alt: IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>), 2027
        // page: "https://bestzzhang.github.io/VAM/",
    },
    {
        image: "./papers/2026_Tree2Art/Tree2Art.webp",
        imageFit: "fill",
        title: "Tree2Art: Tree-Conditioned Articulated 3D Object Generation from a Single Image",
        authors: [
            "Yining Yang", "Mengqi Rong", "Chaoqun Ma", "Jingbo Zhang", "Minglei Lu", "Shuhan Shen#",
        ],
        venue: `Under review, 2026`, // alt: IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>), 2027
        // page: "https://bestzzhang.github.io/VAM/",
    },
    {
        image: "./papers/2026_DEICA/DEICA.webp",
        imageFit: "fill",
        title: "DEICA: Data-Efficient Human-to-Robot Video Generation via In-Context Adaptation",
        authors: [
            "Lianghan Zhu", "Yanqi Bao", "Zheng Gu", "Jingbo Zhang", "Jing Wu",
            "Yukun Lai", "Jing Huo", "Jieqi Shi", "Yang Gao", 
            "Xiaofeng Wang", "Zheng Zhu",
        ],
        venue: `Under review, 2026`, // alt: IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>), 2027
        // page: "https://bestzzhang.github.io/VAM/",
        // show: false,
    },
    {
        image: "./papers/2026_SODM/SODM.png",
        imageFit: "fill",
        title: "Same Objective, Different Moments: Residual-Guided Temporal Resampling for VLA Continuation",
        authors: [
            "Yu Liu | https://rainyrobo.github.io/", "Chengyu Miao", "Tianlv Huang",
            "Hanyang Yu | https://hanyangyu1021.github.io/", "Wei Han", "Hetian Guo",
            "Haitao Lin | https://hetolin.github.io/", "Xuan Song", "Jingbo Zhang#", "Zipei Fan#",
        ],
        venue: `Under review, 2026`, // alt: International Conference on Learning Representations (<strong>ICLR</strong>), 2027
        // page: "https://bestzzhang.github.io/VAM/",
    },
    {
        image: "./papers/2026_VoxelasMemory/Voxel_as_Memory.webp",
        imageFit: "fill",
        title: "VoxelMem: video generation with 4D voxel control and memory",
        authors: [
            "Zhiyuan Zhang | https://bestzzhang.github.io/", "Jingbo Zhang+",
            "Zhitong Huang | https://scholars.cityu.edu.hk/en/persons/zhithuang2/",
            "Qi Sun | https://scholars.cityu.edu.hk/en/persons/qisun45/",
            "Haitao Lin | https://hetolin.github.io/", "Shenghao Zhang", "Yuzhen Liu",
            "Jing Liao# | https://www.cityu.edu.hk/stfprofile/jingliao.htm",
        ],
        venue: `Under review, 2026`, // alt: International Conference on Learning Representations (<strong>ICLR</strong>), 2027
        page: "https://bestzzhang.github.io/VAM/",
        pin: true,
    },
    {
        image: "./papers/2026_GeniWorld/GeniWorld.webp",
        imageFit: "fill",
        title: "GeniWorld: A Generalizable Interactive World Model for Robotic Manipulation via Visual Actions",
        authors: [
            "Chenghao Gu* | https://scholar.google.com.hk/citations?user=v1NkCl0AAAAJ&hl=zh-CN&oi=sra",
            "Hanyang Yu* | https://hanyangyu1021.github.io/", "Jingbo Zhang#",
            "Haitao Lin | https://hetolin.github.io/", "Wenyao Zhang | https://zhangwenyao1.github.io/",
            "Jinghe Wang", "Hanglei Jin", "Shuzhao Xie", "Jingyan Jiang", "Zhi Wang#",
        ],
        venue: `Under review, 2026`, // alt: IEEE Robotics and Automation Letters (<strong>RAL</strong>), 2026
        page: "https://chenghaogu.github.io/GeniWorld/",
        pdf: "https://arxiv.org/pdf/2608.06332",
        bibtex: "./papers/2026_GeniWorld/gu2026geniworld.bib",
        pin: true,
    },
    {
        image: "./papers/2026_ImageWAM/imagewam.webp",
        imageFit: "fill",
        title: "ImageWAM: Do World Action Models Really Need Video Generation, or Just Image Editing?",
        authors: [
            "Yuyang Zhang | https://scholar.google.com.hk/citations?hl=zh-CN&user=v_6ZAw0AAAAJ",
            "Wenyao Zhang | https://zhangwenyao1.github.io/", "Zekun Qi | https://qizekun.github.io/",
            "He Zhang | https://cghezhang.github.io/", "Haitao Lin | https://hetolin.github.io/",
            "Jingbo Zhang", "Zhibo Chen", "Yao Mu", "Xiaokang Yang", "Xin Jin", "Wenjun Zeng",
        ],
        venue: `Conference on Robot Learning (<strong>CoRL</strong>), 2026`,
        page: "https://zhangwenyao1.github.io/ImageWAM/",
        pdf: "https://arxiv.org/pdf/2606.19531",
        code: "https://github.com/yuyangalin/ImageWAM",
        bibtex: "./papers/2026_ImageWAM/zhang2026imagewam.bib",
        pin: true,
    },
    {
        image: "./papers/2026_MaskWAM/maskwam.webp",
        imageFit: "fill",
        title: "MaskWAM: Unifying Mask Prompting and Prediction for World-Action Models",
        authors: [
            "Hanyang Yu | https://hanyangyu1021.github.io/", "Haitao Lin | https://hetolin.github.io/",
            "Jingbo Zhang", "Wenyao Zhang | https://zhangwenyao1.github.io/",
            "Chenghao Gu | https://chenghaogu.github.io/", "Heng Li | https://hengli.me/",
            "Ping Tan | https://ece.hkust.edu.hk/pingtan",
        ],
        venue: `Conference on Robot Learning (<strong>CoRL</strong>), 2026`,
        page: "https://hanyangyu1021.github.io/maskwam.github.io/",
        pdf: "https://arxiv.org/pdf/2606.13515",
        code: "https://github.com/hanyangyu1021/maskwam",
        video: "https://www.youtube.com/watch?v=x0tY7byEaF4",
        bibtex: "./papers/2026_MaskWAM/yu2026maskwam.bib",
        pin: true,
    },
    {
        image: "./papers/2026_RGVLN/pipeline.webp",
        title: "RG-VLN: Benchmarking Underspecified Request Grounding in Vision-Language Navigation",
        authors: [
            "Jiaru Zhong", "Yuxiang Yang", "Wei Cui", "Junliang Chen", "Jingbo Zhang",
            "Huaiyuan Xu | https://huaiyuanxu.github.io/", "Jiahui Xu", "Yijie Guo", "Yi Wang", "Qiang Zhang",
            "Lap-Pui Chau",
        ],
        venue: `Under review, 2026`,
    },
    {
        image: "./papers/2026_StructMesh-GS/pipeline.jpg",
        title: "StructMesh-GS: Structure-Adaptive Mesh Refinement of Geometry-Grounded Gaussians for Indoor Reconstruction",
        authors: [
            "Ziyu Zhang", "Jingbo Zhang+", "Zheng Gu | https://edward3862.github.io/", "Xiang Gao",
            "Shuhan Shen#",
        ],
        venue: `Under review, 2026`, // alt: Fourteenth International Conference on 3D Vision (<strong>3DV</strong>), 2027
    },
    {
        image: "./papers/2026_Free360Head/Free360Head.webp",
        imageFit: "fill",
        title: "Free360Head: Continuous-View Full-Head Generation via 3D-Aware Guidance",
        authors: [
            "Weichao Liu", "Weijie Wang", "Jichao Zhang", "Jingbo Zhang", "Zhenyu Wu", 
            "Zheng Gu", "Kun Wang", "Bruno Lepri", "Weizhi Nie"
        ],
        venue: `Under review, 2026`, // alt: IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>), 2027
        // page: "https://bestzzhang.github.io/VAM/",
    },
    {
        image: "./papers/2025_da4d/da4d_poster.webp",
        clip: "./papers/2025_da4d/da4d",
        title: "DetAny4D: Detect Anything 4D Temporally in a Streaming RGB Video",
        authors: [
            "Jiawei Hou | https://jarvishou829.github.io/", "Shenghao Zhang#",
            "Can Wang | https://cassiepython.github.io/", "Zheng Gu | https://edward3862.github.io/",
            "Yonggen Ling", "Taiping Zeng", "Xiangyang Xue#", "Jingbo Zhang#",
        ],
        venue: `IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>), 2026`,
        page: "https://jarvishou829.github.io/DA4D/",
        pdf: "https://arxiv.org/pdf/2511.18814",
        bibtex: "./papers/2025_da4d/hou2025detany4d.bib",
    },
    {
        image: "./papers/2025_wordcraft/font-teaser-new.webp",
        title: "WordCraft: Interactive Artistic Typography with Attention Awareness and Noise Blending",
        authors: [
            "Zhe Wang", "Jingbo Zhang",
            "Tianyi Wei | https://scholar.google.com/citations?user=-wfXmM4AAAAJ&hl=zh-CN",
            "Can Wang | https://cassiepython.github.io/",
            "Wanchao Su | https://research.monash.edu/en/persons/wanchao-su",
        ],
        venue: `arXiv preprint arXiv:2507.09573, 2025`,
        pdf: "https://arxiv.org/pdf/2507.09573",
        bibtex: "./papers/2025_wordcraft/wang2025wordcraft.bib",
    },
    {
        image: "./papers/2025_tairos/perception.webp",
        title: "TAIROS: An Embodied AI Platform for Robotics Applications",
        authors: `Tencent Robotics X Team & Futian Laboratory, Shenzhen`,
        venue: `TAIROS Technical Report, 2025`,
        page: "https://tairos.tencent.com/",
        pdf: "https://cdn.tairos.tencent-cloud.com/downloads/tools/pdf/tairos.pdf",
        code: "https://tairos.tencent.com/docs/models/perception/sdk_download",
    },
    {
        image: "./papers/2025_3d_editing/overview.webp",
        title: "Generative object insertion in gaussian splatting with a multi-view diffusion model",
        authors: [
            "Hongliang Zhong | https://github.com/JiuTongBro", "Can Wang | https://cassiepython.github.io/",
            "Jingbo Zhang", "Jing Liao | https://www.cityu.edu.hk/stfprofile/jingliao.htm",
        ],
        venue: `Visual Informatics, 2025`,
        pdf: "https://doi.org/10.1016/j.visinf.2025.100238",
        bibtex: "./papers/2025_3d_editing/zhong2025generative.bib",
    },
    {
        image: "./papers/2025_HumanRef-GS/2025_humanref-gs_poster.webp",
        clip: "./papers/2025_HumanRef-GS/2025_humanref-gs",
        title: "HumanRef-GS: Image-to-3D Human Generation With Reference-Guided Diffusion and 3D Gaussian Splatting",
        authors: [
            "Jingbo Zhang", "Xiaoyu Li | https://xiaoyu258.github.io/",
            "Hongliang Zhong | https://github.com/JiuTongBro", "Qi Zhang | https://qzhang-cv.github.io/",
            "Yanpei Cao | https://yanpei.me/",
            "Ying Shan | https://scholar.google.com/citations?user=4oXBp9UAAAAJ&hl=zh-CN",
            "Jing Liao | https://www.cityu.edu.hk/stfprofile/jingliao.htm",
        ],
        venue: `IEEE Transactions on Circuits and Systems for Video Technology (<strong>TCSVT</strong>), 2025`,
        page: "https://eckertzhang.github.io/HumanRef.github.io/",
        pdf: "https://ieeexplore.ieee.org/abstract/document/10879794",
        bibtex: "./papers/2025_HumanRef-GS/zhang2025humanref.bib",
    },
    {
        image: "./papers/2024_3D_Survey/survey.webp",
        imageAlt: "Survey Paper",
        title: "Advances in 3D Generation: A Survey",
        authors: [
            "Xiaoyu Li | https://xiaoyu258.github.io/", "Qi Zhang | https://qzhang-cv.github.io/",
            "Di Kang | https://scholar.google.com.hk/citations?user=2ztThPwAAAAJ&hl=zh-CN",
            "Weihao Cheng | https://scholar.google.com/citations?user=gP-UxcoAAAAJ",
            "Yiming Gao | https://scholar.google.com/citations?user=UvvufgQAAAAJ&hl=zh-CN", "Jingbo Zhang",
            "Zhihao Liang | https://lzhnb.github.io/",
            "Jing Liao | https://www.cityu.edu.hk/stfprofile/jingliao.htm", "Yanpei Cao | https://yanpei.me/",
            "Ying Shan | https://scholar.google.com/citations?user=4oXBp9UAAAAJ&hl=zh-CN",
        ],
        venue: `arXiv preprint arXiv:2401.17807, 2024`,
        pdf: "https://arxiv.org/pdf/2401.17807.pdf",
        bibtex: "./papers/2024_3D_Survey/li2024advances.bib",
    },
    {
        image: "./papers/2024_tpami/ict_pami.webp",
        title: "High-Fidelity and Efficient Pluralistic Image Completion With Transformers",
        authors: [
            "Ziyu Wan | http://raywzy.com/", "Jingbo Zhang", "Dongdong Chen | http://www.dongdongchen.bid/",
            "Jing Liao | https://www.cityu.edu.hk/stfprofile/jingliao.htm",
        ],
        venue: `IEEE Transactions on Pattern Analysis and Machine Intelligence (<strong>TPAMI</strong>), 2024`,
        page: "http://raywzy.com/ICT/",
        pdf: "https://ieeexplore.ieee.org/document/10591425",
        code: "https://github.com/raywzy/ICT",
        bibtex: "./papers/2024_tpami/wan2024high.bib",
    },
    {
        image: "./papers/2023_HumanRef/teaser_poster.webp",
        clip: "./papers/2023_HumanRef/teaser",
        title: "HumanRef: Single Image to 3D Human Generation via Reference-Guided Diffusion",
        authors: [
            "Jingbo Zhang", "Xiaoyu Li | https://xiaoyu258.github.io/",
            "Qi Zhang | https://qzhang-cv.github.io/", "Yanpei Cao | https://yanpei.me/",
            "Ying Shan | https://scholar.google.com/citations?user=4oXBp9UAAAAJ&hl=zh-CN",
            "Jing Liao | https://www.cityu.edu.hk/stfprofile/jingliao.htm",
        ],
        venue: `IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong>CVPR</strong>), 2024`,
        page: "https://eckertzhang.github.io/HumanRef.github.io/",
        pdf: "https://arxiv.org/pdf/2311.16961.pdf",
        code: "https://github.com/eckertzhang/HumanRef",
        video: "https://youtu.be/4R3iaamYwa8",
        bibtex: "./papers/2023_HumanRef/zhang2023humanref.bib",
    },
    {
        image: "./papers/2023_VQ-NeRF/teaser_poster.webp",
        clip: "./papers/2023_VQ-NeRF/teaser",
        title: "VQ-NeRF: Neural Reflectance Decomposition and Editing with Vector Quantization",
        authors: [
            "Hongliang Zhong | https://github.com/JiuTongBro", "Jingbo Zhang",
            "Jing Liao | https://www.cityu.edu.hk/stfprofile/jingliao.htm",
        ],
        venue: `IEEE Transactions on Visualization and Computer Graphics (<strong>TVCG</strong>), 2023`,
        page: "https://jtbzhl.github.io/VQ-NeRF.github.io/",
        pdf: "https://arxiv.org/pdf/2310.11864.pdf",
        code: "https://github.com/JiuTongBro/vqnerf_release",
        video: "https://youtu.be/-kIHOV28ukk",
        bibtex: "./papers/2023_AvatarCraft/zhong2023vq.bib",
    },
    {
        image: "./papers/2023_Text2NeRF/teaser_poster.webp",
        clip: "./papers/2023_Text2NeRF/teaser",
        title: "Text2NeRF: Text-Driven 3D Scene Generation with Neural Radiance Fields",
        authors: [
            "Jingbo Zhang", "Xiaoyu Li | https://xiaoyu258.github.io/", "Ziyu Wan | http://raywzy.com/",
            "Can Wang | https://cassiepython.github.io/",
            "Jing Liao | https://www.cityu.edu.hk/stfprofile/jingliao.htm",
        ],
        venue: `IEEE Transactions on Visualization and Computer Graphics (<strong>TVCG</strong>), 2023`,
        page: "https://eckertzhang.github.io/Text2NeRF.github.io/",
        pdf: "https://arxiv.org/pdf/2305.11588.pdf",
        code: "https://github.com/eckertzhang/Text2NeRF",
        video: "https://youtu.be/G3xiabqcv3E",
        bibtex: "./papers/2023_Text2NeRF/zhang2023text2nerf.bib",
    },
    {
        image: "./papers/2023_AvatarCraft/teaser_poster.webp",
        clip: "./papers/2023_AvatarCraft/teaser",
        title: "AvatarCraft: Transforming Text into Neural Human Avatars with Parameterized Shape and Pose Control",
        authors: [
            "Ruixiang Jiang | https://j-rx.com/", "Can Wang | https://cassiepython.github.io/", "Jingbo Zhang",
            "Menglei Chai | https://mlchai.com/", "Mingming He | https://mingminghe.com/",
            "Dongdong Chen | https://www.dongdongchen.bid/",
            "Jing Liao | https://www.cityu.edu.hk/stfprofile/jingliao.htm",
        ],
        venue: `IEEE International Conference on Computer Vision (<strong>ICCV</strong>), 2023`,
        page: "https://avatar-craft.github.io/",
        pdf: "https://arxiv.org/pdf/2303.17606.pdf",
        code: "https://github.com/songrise/avatarcraft",
        video: "https://youtu.be/GXPjdN-UF04",
        bibtex: "./papers/2023_AvatarCraft/jiang2023avatarcraft.bib",
    },
    {
        image: "./papers/2022_FDNeRF/FDNeRF_poster.webp",
        clip: "./papers/2022_FDNeRF/FDNeRF",
        title: "FDNeRF: Few-shot Dynamic Neural Radiance Fields for Face Reconstruction and Expression Editing",
        authors: [
            "Jingbo Zhang", "Xiaoyu Li | https://xiaoyu258.github.io/", "Ziyu Wan | http://raywzy.com/",
            "Can Wang | https://cassiepython.github.io/",
            "Jing Liao | https://www.cityu.edu.hk/stfprofile/jingliao.htm",
        ],
        venue: `<strong>SIGGRAPH Asia</strong>, 2022`,
        page: "https://fdnerf.github.io/",
        pdf: "https://arxiv.org/pdf/2208.05751.pdf",
        code: "https://github.com/FDNeRF/FDNeRF",
        video: "https://www.youtube.com/embed/at_42ekU0I0",
        bibtex: "./papers/2022_FDNeRF/zhang2022fdnerf.bib",
    },
    {
        image: "./papers/2022_texture_opti/texture_opti_poster.webp",
        clip: "./papers/2022_texture_opti/texture_opti",
        title: "Adaptive Joint Optimization for 3D Reconstruction with Differentiable Rendering",
        authors: [
            "Jingbo Zhang", "Ziyu Wan | http://raywzy.com/",
            "Jing Liao | https://www.cityu.edu.hk/stfprofile/jingliao.htm",
        ],
        venue: `IEEE Transactions on Visualization and Computer Graphics (<strong>TVCG</strong>), 2022`,
        page: "https://adjointopti.github.io/adjoin.github.io/",
        pdf: "https://arxiv.org/pdf/2208.07003.pdf",
        code: "https://github.com/adjointopti/ADJOIN",
        bibtex: "./papers/2022_texture_opti/zhang2022adaptive.bib",
    },
    {
        image: "./papers/2021_ICT/ICT.webp",
        title: "High-Fidelity Pluralistic Image Completion with Transformers",
        authors: [
            "Ziyu Wan | http://raywzy.com/", "Jingbo Zhang", "Dongdong Chen | http://www.dongdongchen.bid/",
            "Jing Liao | https://www.cityu.edu.hk/stfprofile/jingliao.htm",
        ],
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
        image: "./papers/2019_beta_wavelet/beta_wavelet.webp",
        title: "A multiple beta wavelet-based locally regularized ultraorthogonal forward regression algorithm for time-varying system identification with applications to EEG",
        authors: [
            "Yang Li", "Jingbo Zhang", "Weigang Cui", "Heng Yuan", "Hualiang Wei",
        ],
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
        image: "./patents/CN201711305025_FullTextImage1.webp",
        title: "一种基于beta小波基函数展开的时变非线性系统快速辨识方法",
        patentNo: "CN107967395A",
        inventors: `Yang Li, <b>Jingbo Zhang</b>, Weigang Cui, Song Xu, Qinglei Hu`,
        status: "granted",
        statusText: "Granted (2018-04-27)",
    },
    {
        image: "./patents/CN108509933A.PDF.webp",
        title: "一种基于多小波基函数展开的锋电位时变格兰杰因果准确辨识方法",
        patentNo: "CN108509933A",
        inventors: `Yang Li, Daxin Hao, <b>Jingbo Zhang</b>`,
        status: "granted",
        statusText: "Granted (2018-09-07)",
    },
    {
        image: "./patents/Geniworld.webp", // TODO: 修改为正确的专利图片路径
        title: "一种用于机器人操作的语义与几何驱动的世界动作生成方法",
        patentNo: "2026110490",
        inventors: `<b>Jingbo Zhang</b>, Yu Liu, Haitao Lin, Zhitong Huang, Minglei Lu, He Zhang, Yuchen Zhou`,
        status: "review",
        statusText: "Under Review (Applied 2026-11-18)",
    },
    {
        image: "./patents/Geniworld.webp", // TODO: 修改为正确的专利图片路径
        title: "一种支持灵活提示的三维铰接物体结构与运动统一预测方法及系统",
        patentNo: "2026110519",
        inventors: `<b>Jingbo Zhang</b>, Chaoqun Ma, Shuhan Shen, Mengqi Rong, Yining Yang, Haitao Lin, Minglei Lu`,
        status: "review",
        statusText: "Under Review (Applied 2026-11-19)",
    },
    {
        image: "./patents/Geniworld.webp", // TODO: 修改为正确的专利图片路径
        title: "一种基于历史运动编码与多时距价值函数引导的机器人动态物体操作算法",
        patentNo: "2026110127CN",
        inventors: `<b>Jingbo Zhang</b>, Yuxiang Yang, Haitao Lin, Yu Liu, He Zhang, Minglei Lu`,
        status: "review",
        statusText: "Under Review (Applied 2026-11-05)",
    },
    {
        image: "./patents/Geniworld.webp", // TODO: 修改为正确的专利图片路径
        title: "一种基于时间重采样的视觉语言动作模型后训练方法",
        patentNo: "2026090630CN",
        inventors: `Yu Liu, <b>Jingbo Zhang</b>, Haitao Lin, Hanyang Yu, Minglei Lu`,
        status: "review",
        statusText: "Under Review (Applied 2026-09-30)",
    },
    {
        image: "./patents/Geniworld.webp",
        title: "一种基于视觉动作条件的可泛化机器人操作世界模型构建方法及系统",
        patentNo: "2026080506CN",
        inventors: `<b>Jingbo Zhang</b>, Chenghao Gu, Hanyang Yu, Haitao Lin, Minglei Lu, Yong Deng, He Zhang`,
        status: "review",
        statusText: "Under Review (Applied 2026-08-21)",
    },
    {
        image: "./patents/DecAny4d.webp",
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
        image: "./patents/Geniworld.webp", // TODO: 修改为正确的专利图片路径
        title: "一种基于引导进度建模的机器人世界动作模型预训练方法",
        patentNo: "2026110518",
        inventors: `Hanyang Yu, He Zhang, Yubo Dong, Minglei Lu, <b>Jingbo Zhang</b>`,
        status: "review",
        statusText: "Under Review (Applied 2026-11-19)",
    },
    {
        image: "./patents/2025120878CN.webp",
        title: "一种面向机器人操作的端到端开放词汇3D视觉语言模型",
        patentNo: "2025120878CN",
        inventors: `Haitao Lin, Jingshun Huang, Cheng Zhou, Yonggen Ling, He Zhang, Minglei Lu, <b>Jingbo Zhang</b>`,
        status: "review",
        statusText: "Under Review (Applied 2025-12-31)",
    },
    {
        image: "./patents/2025120018CN.webp",
        title: "一种基于全局多路优化的RGB视频6D位姿数据集标注方法",
        patentNo: "2025120018CN",
        inventors: `Minglei Lu, Yonggen Ling, Shenghao Zhang, Yuzhen Liu, Haitao Lin, <b>Jingbo Zhang</b>`,
        status: "review",
        statusText: "Under Review (Applied 2025-12-01)",
    },
    {
        image: "./patents/2025110345CN.webp",
        title: "一种基于动捕系统的机械臂运动学标定方法",
        patentNo: "2025110345CN",
        inventors: `Minglei Lu, Yonggen Ling, <b>Jingbo Zhang</b>, Lingzhu Xiang, Junning Qiu`,
        status: "review",
        statusText: "Under Review (Applied 2025-11-20)",
    },
    {
        image: "./patents/202511942210.7.webp",
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
                photo: "./Collaboration/Photos/jingliao_STF.webp",
                role: "Associate Professor<br>Department of Computer Science<br>City University of Hong Kong",
                note: "My Ph.D. advisor.",
                homepage: "https://www.cityu.edu.hk/stfprofile/jingliao.htm",
            },
            {
                name: "Xiaoyu Li",
                photo: "./Collaboration/Photos/lixiaoyu.webp",
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
                photo: "./Collaboration/Photos/wanziyu.webp",
                role: "Technical Staff<br>Microsoft AI Superintelligence", 
                homepage: "http://raywzy.com/" 
            },
            {
                name: "Can Wang",
                photo: "./Collaboration/Photos/wangcan.webp",
                role: "Postdoctoral Fellow<br>The University of Hong Kong", 
                homepage: "https://cassiepython.github.io/" 
            },
            {
                name: "Wanchao Su",
                photo: "./Collaboration/Photos/suwanchao.webp",
                role: "Associate Professor<br>Dalian University of Technology", 
                homepage: "https://ansire.github.io/" 
            },
            {
                name: "Zheng Gu",
                photo: "./Collaboration/Photos/guzheng.webp",
                role: "Assistant Professor<br>Shenzhen University", 
                homepage: "https://edward3862.github.io/" 
            },
            {
                name: "Yanqi Bao",
                photo: "./Collaboration/Photos/yanqibao.webp",
                role: "Researcher<br>Horizon Robotics", 
                homepage: "https://bbbbby-99.github.io/yanqibao.github.io/#:~:text=Yanqi%20Bao%20is%20currently%20a%20PhD%20student%20of%20the%20Department" 
            },
            {
                name: "Zhiyuan Zhang",
                photo: "./Collaboration/Photos/zhangzhiyuan.webp",
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
                photo: "./Collaboration/Photos/xuhuaiyuan.webp",
                role: "Postdoctoral Fellow<br>The Hong Kong Polytechnic University", 
                homepage: "https://huaiyuanxu.github.io/" 
            },
            {
                name: "Haitao Lin",
                photo: "./Collaboration/Photos/linhaitao.webp",
                role: "Senior Researcher<br>Robotics X, Tencent", 
                homepage: "https://hetolin.github.io/" 
            },
            {
                name: "Wenyao Zhang",
                photo: "./Collaboration/Photos/zhangwenyao.webp",
                role: "Senior Researcher", 
                homepage: "https://zhangwenyao1.github.io/" 
            },
            {
                name: "Shenghao Zhang",
                photo: "./Collaboration/Photos/zhangshenghao.webp",
                role: "Senior Researcher<br>Robotics X, Tencent", 
                // homepage: "" 
            },
            {
                name: "Yuzhen Liu",
                photo: "./Collaboration/Photos/liuyuzhen.webp",
                role: "Senior Researcher", 
                homepage: "https://ieeexplore.ieee.org/author/37086560116" 
            },
            {
                name: "Minglei Lu",
                photo: "./Collaboration/Photos/luminglei.webp",
                role: "Senior Researcher<br>Robotics X, Tencent", 
                homepage: "https://scholar.google.com/citations?user=jq2fvmIAAAAJ&hl=en" 
            },
            {
                name: "Hongliang Zhong",
                photo: "./Collaboration/Photos/zhonghongliang.webp",
                role: "Ph.D. Student<br>Zhejiang University", 
                homepage: "https://github.com/JiuTongBro" 
            },
            {
                name: "Jichao Zhang",
                photo: "./Collaboration/Photos/zhangjichao.webp",
                role: "Assistant Professor<br>Ocean University of China", 
                homepage: "https://zhangqianhui.github.io/" 
            },
            {
                name: "Weijie Wang",
                photo: "./Collaboration/Photos/wangweijie.webp",
                role: "Senior Researcher", 
                homepage: "https://scholar.google.com.hk/citations?hl=zh-CN&user=AtB0KFsAAAAJ" 
            },
            {
                name: "Lei Liu",
                photo: "./Collaboration/Photos/liulei.webp",
                role: "Postdoctoral Fellow<br>The University of Hong Kong", 
                homepage: "https://scholar.google.com/citations?user=3FsuonEAAAAJ&hl=zh-CN" 
            },
            {
                name: "Hanyang Yu",
                photo: "./Collaboration/Photos/yuhanyang.webp",
                role: "Ph.D. Student<br>Hong Kong University of Science and Technology", 
                homepage: "https://hanyangyu1021.github.io/" 
            },
            {
                name: "Yuyang Zhang",
                photo: "./Collaboration/Photos/zhangyuyang.webp",
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
                photo: "./Collaboration/Photos/houjiawei.webp",
                role: "Ph.D. Student<br>Fudan University", 
                homepage: "https://jarvishou829.github.io/" 
            },
            {
                name: "Zhiyuan Zhang",
                photo: "./Collaboration/Photos/zhangzhiyuan.webp",
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
                name: "** Yang",
                // name: "Yuxiang Yang",
                // photo: "./Collaboration/Photos/yangyuxiang.webp",
                role: "Ph.D. Student<br>The Hong Kong Polytechnic University", 
                // homepage: "https://scholar.google.com.hk/citations?hl=zh-CN&user=uyiHu0kAAAAJ" 
            },
            {
                name: "Yu Liu",
                photo: "./Collaboration/Photos/liuyu.webp",
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
