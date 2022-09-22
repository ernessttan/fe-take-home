import { FC } from 'react';

type SvgProps = {
  fillColor?: string;
  width?: number;
  height?: number;
};

const HypeLogo: FC<SvgProps> = ({
  fillColor, width, height,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 444 71"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_i_1874_5531)">
      <path
        d="M112.125 56.5655V37.1482C112.125 34.6247 111.33 32.5451 109.741 30.9094C108.153 29.2738 106.096 28.456 103.573 28.456C101.89 28.456 100.395 28.8299 99.0864 29.5776C97.7779 30.3253 96.7498 31.3534 96.0021 32.6619C95.2544 33.9704 94.8805 35.4658 94.8805 37.1482L92.2869 35.6761C92.2869 33.1526 92.8477 30.9094 93.9692 28.9467C95.0908 26.9839 96.6564 25.4418 98.6659 24.3202C100.675 23.1519 102.942 22.5677 105.465 22.5677C107.989 22.5677 110.209 23.1285 112.125 24.2501C114.088 25.3717 115.63 26.9372 116.751 28.9467C117.873 30.9562 118.434 33.2694 118.434 35.8864V56.5655H112.125ZM88.5717 56.5655V6.51514H94.8805V56.5655H88.5717Z"
        fill={fillColor}
      />
      <path
        d="M137.911 56.8459L123.47 23.2687H130.48L141.205 49.5557H138.962L150.248 23.2687H157.258L141.696 56.8459H137.911ZM128.377 70.5151L138.191 50.3968L141.696 56.8459L135.387 70.5151H128.377Z"
        fill={fillColor}
      />
      <path
        d="M179.686 57.2665C177.163 57.2665 174.873 56.7524 172.816 55.7243C170.807 54.6495 169.195 53.1774 167.98 51.3081C166.765 49.4388 166.087 47.3125 165.947 44.9292V34.9051C166.087 32.475 166.765 30.3487 167.98 28.5261C169.241 26.6568 170.877 25.2081 172.887 24.18C174.943 23.1051 177.209 22.5677 179.686 22.5677C182.724 22.5677 185.458 23.3388 187.888 24.881C190.364 26.4231 192.304 28.5027 193.706 31.1197C195.108 33.7368 195.809 36.6809 195.809 39.9522C195.809 43.2234 195.108 46.1676 193.706 48.7846C192.304 51.4016 190.364 53.4812 187.888 55.0233C185.458 56.5188 182.724 57.2665 179.686 57.2665ZM178.635 51.3081C180.738 51.3081 182.584 50.8174 184.172 49.8361C185.761 48.8547 187.023 47.5228 187.958 45.8404C188.892 44.1113 189.36 42.1252 189.36 39.8821C189.36 37.6856 188.892 35.7229 187.958 33.9938C187.023 32.2647 185.761 30.9328 184.172 29.9982C182.584 29.0168 180.761 28.5261 178.705 28.5261C176.602 28.5261 174.756 29.0168 173.167 29.9982C171.578 30.9328 170.34 32.2647 169.452 33.9938C168.564 35.7229 168.12 37.709 168.12 39.9522C168.12 42.1486 168.54 44.1113 169.382 45.8404C170.27 47.5228 171.508 48.8547 173.097 49.8361C174.732 50.8174 176.578 51.3081 178.635 51.3081ZM162.161 70.5151V23.2687H168.47V32.031L167.279 40.0924L168.47 48.2238V70.5151H162.161Z"
        fill={fillColor}
      />
      <path
        d="M218.383 57.2665C215.065 57.2665 212.074 56.5188 209.41 55.0233C206.746 53.4812 204.643 51.4016 203.101 48.7846C201.559 46.1676 200.788 43.2001 200.788 39.8821C200.788 36.6108 201.536 33.6667 203.031 31.0496C204.573 28.4326 206.63 26.3764 209.2 24.881C211.817 23.3388 214.738 22.5677 217.962 22.5677C221.046 22.5677 223.757 23.2687 226.094 24.6707C228.477 26.0726 230.323 28.012 231.631 30.4889C232.987 32.9657 233.664 35.7696 233.664 38.9007C233.664 39.368 233.641 39.8821 233.594 40.4428C233.547 40.9569 233.454 41.5644 233.314 42.2654H205.204V37.008H229.949L227.636 39.0409C227.636 36.7977 227.239 34.9051 226.444 33.3629C225.65 31.774 224.528 30.5589 223.079 29.7178C221.631 28.8299 219.878 28.3859 217.822 28.3859C215.672 28.3859 213.78 28.8532 212.144 29.7879C210.508 30.7225 209.247 32.031 208.359 33.7134C207.471 35.3957 207.027 37.3819 207.027 39.6718C207.027 42.0084 207.494 44.0646 208.429 45.8404C209.363 47.5695 210.695 48.9248 212.424 49.9062C214.153 50.8408 216.14 51.3081 218.383 51.3081C220.252 51.3081 221.958 50.981 223.5 50.3267C225.089 49.6725 226.444 48.6911 227.566 47.3826L231.631 51.5184C230.042 53.3877 228.08 54.8131 225.743 55.7944C223.453 56.7758 221 57.2665 218.383 57.2665Z"
        fill={fillColor}
      />
      <path
        d="M240.543 56.5655V23.2687H246.852V56.5655H240.543ZM246.852 37.5688L244.469 36.5173C244.469 32.2647 245.45 28.8766 247.413 26.353C249.376 23.8295 252.203 22.5677 255.895 22.5677C257.577 22.5677 259.096 22.8715 260.451 23.479C261.806 24.0398 263.068 24.9978 264.236 26.353L260.101 30.629C259.4 29.8813 258.629 29.3439 257.787 29.0168C256.946 28.6897 255.965 28.5261 254.843 28.5261C252.507 28.5261 250.591 29.2738 249.095 30.7692C247.6 32.2647 246.852 34.5312 246.852 37.5688Z"
        fill={fillColor}
      />
      <path
        d="M278.51 57.2665C276.641 57.2665 274.865 57.0328 273.183 56.5655C271.547 56.0515 270.028 55.3505 268.626 54.4626C267.224 53.5279 266.009 52.4297 264.981 51.1679L269.047 47.1022C270.262 48.5976 271.664 49.7192 273.253 50.4669C274.842 51.1679 276.618 51.5184 278.58 51.5184C280.543 51.5184 282.062 51.1913 283.137 50.537C284.212 49.8361 284.749 48.878 284.749 47.663C284.749 46.448 284.305 45.5133 283.417 44.8591C282.576 44.1581 281.478 43.5973 280.123 43.1767C278.767 42.7094 277.319 42.2654 275.776 41.8448C274.281 41.3775 272.856 40.7933 271.5 40.0924C270.145 39.3914 269.024 38.4334 268.136 37.2183C267.295 36.0033 266.874 34.391 266.874 32.3815C266.874 30.372 267.365 28.6429 268.346 27.1942C269.327 25.6988 270.683 24.5538 272.412 23.7594C274.188 22.9649 276.314 22.5677 278.791 22.5677C281.408 22.5677 283.721 23.035 285.73 23.9697C287.787 24.8576 289.469 26.2128 290.778 28.0354L286.712 32.1011C285.777 30.8861 284.609 29.9514 283.207 29.2972C281.852 28.6429 280.309 28.3158 278.58 28.3158C276.758 28.3158 275.356 28.6429 274.374 29.2972C273.44 29.9047 272.973 30.7692 272.973 31.8908C272.973 33.0124 273.393 33.8769 274.234 34.4845C275.075 35.092 276.174 35.606 277.529 36.0266C278.931 36.4472 280.38 36.8912 281.875 37.3585C283.37 37.7791 284.796 38.3633 286.151 39.111C287.506 39.8587 288.604 40.8634 289.446 42.1252C290.334 43.387 290.778 45.046 290.778 47.1022C290.778 50.2333 289.656 52.7101 287.413 54.5327C285.216 56.3552 282.249 57.2665 278.51 57.2665Z"
        fill={fillColor}
      />
      <path
        d="M315.365 57.2665C312.842 57.2665 310.552 56.7524 308.496 55.7243C306.486 54.6495 304.874 53.1774 303.659 51.3081C302.444 49.4388 301.766 47.3125 301.626 44.9292V34.9051C301.766 32.475 302.444 30.3487 303.659 28.5261C304.92 26.6568 306.556 25.2081 308.566 24.18C310.622 23.1051 312.888 22.5677 315.365 22.5677C318.403 22.5677 321.137 23.3388 323.567 24.881C326.044 26.4231 327.983 28.5027 329.385 31.1197C330.787 33.7368 331.488 36.6809 331.488 39.9522C331.488 43.2234 330.787 46.1676 329.385 48.7846C327.983 51.4016 326.044 53.4812 323.567 55.0233C321.137 56.5188 318.403 57.2665 315.365 57.2665ZM314.314 51.3081C316.417 51.3081 318.263 50.8174 319.851 49.8361C321.44 48.8547 322.702 47.5228 323.637 45.8404C324.571 44.1113 325.039 42.1252 325.039 39.8821C325.039 37.6856 324.571 35.7229 323.637 33.9938C322.702 32.2647 321.44 30.9328 319.851 29.9982C318.263 29.0168 316.44 28.5261 314.384 28.5261C312.281 28.5261 310.435 29.0168 308.846 29.9982C307.257 30.9328 306.019 32.2647 305.131 33.9938C304.243 35.7229 303.799 37.709 303.799 39.9522C303.799 42.1486 304.219 44.1113 305.061 45.8404C305.949 47.5228 307.187 48.8547 308.776 49.8361C310.412 50.8174 312.257 51.3081 314.314 51.3081ZM297.841 70.5151V23.2687H304.149V32.031L302.958 40.0924L304.149 48.2238V70.5151H297.841Z"
        fill={fillColor}
      />
      <path
        d="M352.8 57.2665C349.762 57.2665 347.005 56.5188 344.528 55.0233C342.052 53.4812 340.089 51.4016 338.64 48.7846C337.238 46.1676 336.537 43.2234 336.537 39.9522C336.537 36.6809 337.238 33.7368 338.64 31.1197C340.089 28.5027 342.028 26.4231 344.458 24.881C346.935 23.3388 349.716 22.5677 352.8 22.5677C355.324 22.5677 357.567 23.1051 359.529 24.18C361.539 25.2081 363.151 26.6568 364.366 28.5261C365.581 30.3487 366.259 32.475 366.399 34.9051V44.9292C366.259 47.3125 365.581 49.4388 364.366 51.3081C363.198 53.1774 361.609 54.6495 359.6 55.7243C357.637 56.7524 355.37 57.2665 352.8 57.2665ZM353.851 51.3081C356.983 51.3081 359.506 50.2566 361.422 48.1537C363.338 46.004 364.296 43.2702 364.296 39.9522C364.296 37.6623 363.852 35.6761 362.964 33.9938C362.123 32.2647 360.908 30.9328 359.319 29.9982C357.73 29.0168 355.884 28.5261 353.781 28.5261C351.678 28.5261 349.809 29.0168 348.174 29.9982C346.585 30.9795 345.323 32.3348 344.388 34.0639C343.5 35.7462 343.056 37.6856 343.056 39.8821C343.056 42.1252 343.5 44.1113 344.388 45.8404C345.323 47.5228 346.608 48.8547 348.244 49.8361C349.879 50.8174 351.749 51.3081 353.851 51.3081ZM363.876 56.5655V47.5929L365.067 39.4615L363.876 31.4001V23.2687H370.255V56.5655H363.876Z"
        fill={fillColor}
      />
      <path
        d="M394.651 57.2665C391.38 57.2665 388.412 56.4954 385.749 54.9532C383.131 53.4111 381.052 51.3315 379.51 48.7145C378.014 46.0507 377.267 43.1066 377.267 39.8821C377.267 36.6108 378.014 33.6667 379.51 31.0496C381.052 28.4326 383.131 26.3764 385.749 24.881C388.412 23.3388 391.38 22.5677 394.651 22.5677C397.221 22.5677 399.605 23.0584 401.801 24.0398C403.998 24.9744 405.89 26.353 407.479 28.1756L403.273 32.3815C402.245 31.1665 400.983 30.2552 399.488 29.6477C398.039 28.9934 396.427 28.6663 394.651 28.6663C392.548 28.6663 390.679 29.157 389.043 30.1384C387.408 31.073 386.122 32.3815 385.188 34.0639C384.253 35.7462 383.786 37.6856 383.786 39.8821C383.786 42.0785 384.253 44.0179 385.188 45.7002C386.122 47.3826 387.408 48.7145 389.043 49.6959C390.679 50.6772 392.548 51.1679 394.651 51.1679C396.427 51.1679 398.039 50.8642 399.488 50.2566C400.983 49.6024 402.268 48.6677 403.343 47.4527L407.479 51.6586C405.937 53.4344 404.044 54.8131 401.801 55.7944C399.605 56.7758 397.221 57.2665 394.651 57.2665Z"
        fill={fillColor}
      />
      <path
        d="M428.542 57.2665C425.224 57.2665 422.233 56.5188 419.569 55.0233C416.905 53.4812 414.802 51.4016 413.26 48.7846C411.718 46.1676 410.947 43.2001 410.947 39.8821C410.947 36.6108 411.694 33.6667 413.19 31.0496C414.732 28.4326 416.788 26.3764 419.359 24.881C421.976 23.3388 424.896 22.5677 428.121 22.5677C431.205 22.5677 433.916 23.2687 436.252 24.6707C438.636 26.0726 440.482 28.012 441.79 30.4889C443.145 32.9657 443.823 35.7696 443.823 38.9007C443.823 39.368 443.8 39.8821 443.753 40.4428C443.706 40.9569 443.613 41.5644 443.472 42.2654H415.363V37.008H440.108L437.795 39.0409C437.795 36.7977 437.397 34.9051 436.603 33.3629C435.808 31.774 434.687 30.5589 433.238 29.7178C431.789 28.8299 430.037 28.3859 427.981 28.3859C425.831 28.3859 423.938 28.8532 422.303 29.7879C420.667 30.7225 419.405 32.031 418.517 33.7134C417.629 35.3957 417.186 37.3819 417.186 39.6718C417.186 42.0084 417.653 44.0646 418.588 45.8404C419.522 47.5695 420.854 48.9248 422.583 49.9062C424.312 50.8408 426.298 51.3081 428.542 51.3081C430.411 51.3081 432.117 50.981 433.659 50.3267C435.248 49.6725 436.603 48.6911 437.724 47.3826L441.79 51.5184C440.201 53.3877 438.238 54.8131 435.902 55.7944C433.612 56.7758 431.159 57.2665 428.542 57.2665Z"
        fill={fillColor}
      />
    </g>
    <path
      d="M33.691 0.000732422H17.1347L4.65169 26.6667C1.26888 33.893 -0.422518 37.5061 0.0899523 40.2662C0.540737 42.694 2.14951 44.6679 4.68569 45.905C7.56895 47.3113 12.2052 47.3113 21.4776 47.3113H33.6189L38.8537 36.1288C39.1356 35.5266 39.2766 35.2255 39.2339 34.9955C39.1963 34.7932 39.0622 34.6287 38.8509 34.5256C38.6106 34.4084 38.2243 34.4084 37.4516 34.4084H26.414C23.3232 34.4084 21.7778 34.4084 20.8167 33.9396C19.9713 33.5273 19.435 32.8693 19.2848 32.06C19.114 31.14 19.6778 29.9356 20.8054 27.5269L33.691 0.000732422Z"
      fill={fillColor}
    />
    <path
      d="M28.8027 65.5042H45.359L57.842 38.8383C61.2248 31.612 62.9163 27.9989 62.4038 25.2388C61.953 22.811 60.3442 20.8371 57.808 19.6C54.9248 18.1937 50.2886 18.1937 41.0162 18.1937L28.8748 18.1937L23.64 29.3762C23.3581 29.9784 23.2172 30.2795 23.2599 30.5095C23.2974 30.7118 23.4315 30.8763 23.6429 30.9794C23.8831 31.0966 24.2695 31.0966 25.0422 31.0966H36.0798C39.1706 31.0966 40.716 31.0966 41.677 31.5653C42.5224 31.9777 43.0587 32.6356 43.209 33.4449C43.3798 34.3649 42.816 35.5693 41.6884 37.9781L28.8027 65.5042Z"
      fill={fillColor}
    />
    <defs>
      <filter
        id="filter0_i_1874_5531"
        x="88.5717"
        y="6.51514"
        width="355.251"
        height="64"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="0.064" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1874_5531"
        />
      </filter>
    </defs>
  </svg>
);

export default HypeLogo;
