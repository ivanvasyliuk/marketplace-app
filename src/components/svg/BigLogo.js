import React from "react";
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const BigLogo = ({ styles }) => {
  return (
    <Svg
      styles={styles}
      width="119"
      height="51"
      viewBox="0 0 119 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_18_209)">
        <Path
          d="M19.8545 30.8241C19.0467 31.8637 18.0117 32.7048 16.8286 33.2832C15.6455 33.8616 14.3458 34.1618 13.0288 34.161H12.9988C11.6752 34.1602 10.3697 33.8546 9.18336 33.2681C7.99704 32.6816 6.96182 31.8299 6.15799 30.779L13.0138 23.957L19.8545 30.8241Z"
          fill="#FF9900"
        />
        <Path
          d="M61.5298 5.96223C61.2384 5.67563 61.0069 5.33392 60.8489 4.95702C60.6909 4.58013 60.6096 4.17558 60.6096 3.76694C60.6096 3.3583 60.6909 2.95375 60.8489 2.57685C61.0069 2.19996 61.2384 1.85825 61.5298 1.57165C61.9656 1.13893 62.5196 0.844576 63.1223 0.725574C63.7249 0.606573 64.3493 0.668229 64.917 0.902797C65.4847 1.13736 65.9704 1.53438 66.313 2.04397C66.6557 2.55355 66.84 3.15298 66.8428 3.76694C66.8462 4.38368 66.6656 4.98744 66.324 5.50108C65.9824 6.01472 65.4953 6.41492 64.9251 6.65056C64.3548 6.88619 63.7272 6.94656 63.1224 6.82395C62.5176 6.70135 61.9631 6.40133 61.5298 5.96223ZM62.0043 36.2921C61.7793 36.0669 61.6027 35.7983 61.4853 35.5025C61.3679 35.2067 61.3122 34.8901 61.3215 34.5721V13.5107C61.3065 13.1875 61.3595 12.8647 61.4771 12.5632C61.5948 12.2618 61.7744 11.9884 62.0043 11.7606C62.2324 11.5407 62.5021 11.3684 62.7976 11.2538C63.0931 11.1393 63.4084 11.0847 63.7253 11.0932C64.0477 11.075 64.3703 11.125 64.6721 11.24C64.9738 11.355 65.2479 11.5325 65.4762 11.7607C65.7046 11.9889 65.8821 12.2628 65.9972 12.5644C66.1123 12.8659 66.1623 13.1884 66.144 13.5107V34.5721C66.1554 34.889 66.102 35.205 65.9872 35.5007C65.8724 35.7964 65.6986 36.0657 65.4763 36.2921C65.2484 36.5219 64.9748 36.7014 64.6732 36.819C64.3716 36.9365 64.0487 36.9895 63.7253 36.9745C63.407 36.9838 63.0903 36.9282 62.7943 36.8108C62.4984 36.6935 62.2296 36.5169 62.0043 36.2921Z"
          fill="#333333"
        />
        <Path
          d="M92.3618 34.9876C92.3642 35.3245 92.2892 35.6576 92.1425 35.961C91.9958 36.2644 91.7814 36.5301 91.5158 36.7376C91.094 37.0987 90.5575 37.2984 90.0021 37.301C89.6715 37.3058 89.3446 37.2315 89.0486 37.0845C88.7525 36.9374 88.4959 36.7217 88.3002 36.4555L79.307 25.3319L76.9323 27.4081V34.6454C76.9482 34.9537 76.8997 35.2619 76.7899 35.5505C76.6801 35.839 76.5114 36.1015 76.2946 36.3214C76.073 36.5358 75.81 36.703 75.5217 36.8125C75.2334 36.9221 74.9258 36.9719 74.6177 36.9588C74.309 36.9766 74.0001 36.929 73.7112 36.8191C73.4222 36.7092 73.1598 36.5394 72.9412 36.3209C72.7226 36.1024 72.5528 35.8402 72.4428 35.5514C72.3328 35.2626 72.2852 34.9539 72.303 34.6454V2.31337C72.2872 2.00508 72.3357 1.69685 72.4455 1.40831C72.5552 1.11977 72.7239 0.857226 72.9408 0.63739C73.1611 0.422313 73.4233 0.25476 73.711 0.145121C73.9988 0.035481 74.306 -0.0139084 74.6137 1.47047e-05C74.9221 -0.0158636 75.2305 0.0326056 75.5192 0.142338C75.8079 0.25207 76.0706 0.420663 76.2906 0.63739C76.5052 0.858841 76.6723 1.12165 76.782 1.40979C76.8916 1.69794 76.9414 2.00538 76.9283 2.31337V21.5797L88.4293 11.3167C88.6355 11.1119 88.8821 10.9523 89.1535 10.848C89.4248 10.7437 89.7149 10.697 90.0052 10.711C90.2956 10.7249 90.5799 10.7991 90.8399 10.9289C91.1 11.0587 91.3302 11.2412 91.5158 11.4648C91.7207 11.6708 91.8804 11.9173 91.9848 12.1885C92.0891 12.4597 92.1358 12.7496 92.1219 13.0398C92.1079 13.33 92.0337 13.6141 91.9038 13.874C91.774 14.134 91.5914 14.364 91.3677 14.5496L82.6578 22.3061L91.8432 33.5778C92.1915 33.9633 92.3773 34.4684 92.3618 34.9876Z"
          fill="#333333"
        />
        <Path
          d="M117.09 17.239C116.002 15.2894 114.394 13.6798 112.445 12.5893C110.393 11.457 108.08 10.8803 105.737 10.9163C103.374 10.8786 101.043 11.4551 98.9703 12.5893C97.0185 13.6757 95.4098 15.2864 94.3261 17.239C93.1959 19.3293 92.6236 21.6754 92.6641 24.051C92.6216 26.4081 93.1944 28.7356 94.3261 30.804C95.4013 32.7629 97.0121 34.3757 98.9703 35.4537C101.053 36.5521 103.373 37.1262 105.728 37.1262C108.083 37.1262 110.403 36.5521 112.486 35.4537C114.432 34.3703 116.032 32.7582 117.101 30.804C118.196 28.7103 118.767 26.3826 118.765 24.0201C118.763 21.6577 118.188 19.3309 117.09 17.239ZM105.723 33.1584C103.913 33.1556 102.144 32.6165 100.64 31.6093C99.1359 30.602 97.9644 29.1718 97.2735 27.4994C96.5827 25.8269 96.4034 23.9873 96.7583 22.2131C97.1131 20.4388 97.9863 18.8095 99.2674 17.531C100.548 16.2526 102.18 15.3824 103.956 15.0304C105.732 14.6785 107.572 14.8605 109.244 15.5536C110.917 16.2466 112.346 17.4196 113.351 18.9242C114.357 20.4288 114.893 22.1976 114.893 24.007C114.893 25.2099 114.655 26.4009 114.194 27.5118C113.732 28.6228 113.056 29.6321 112.204 30.4818C111.352 31.3316 110.341 32.0053 109.229 32.4644C108.117 32.9235 106.924 33.1589 105.721 33.1574L105.723 33.1584Z"
          fill="#333333"
        />
        <Path
          d="M54.8312 17.2083C53.7439 15.2566 52.1362 13.6446 50.1869 12.5516C48.1357 11.4176 45.8232 10.8398 43.4793 10.8756H43.4353C43.153 10.8756 42.8566 10.8906 42.5893 10.9056H42.4702C40.4505 11.0082 38.4811 11.5712 36.7126 12.5516C34.7602 13.6404 33.1515 15.2534 32.0684 17.2083C30.9382 19.3023 30.3659 21.6515 30.4065 24.0303V45.61C30.3915 45.9332 30.4445 46.256 30.5621 46.5574C30.6797 46.8589 30.8593 47.1323 31.0893 47.3601C31.3174 47.58 31.5871 47.7523 31.8825 47.8669C32.178 47.9814 32.4934 48.036 32.8102 48.0274C33.1326 48.0457 33.4553 47.9957 33.757 47.8807C34.0588 47.7657 34.3328 47.5882 34.5611 47.36C34.7895 47.1318 34.967 46.8579 35.0821 46.5563C35.1972 46.2548 35.2472 45.9323 35.229 45.61V34.4895C35.6918 34.8496 36.1829 35.1719 36.6976 35.4531C38.7801 36.5531 41.0999 37.1281 43.4553 37.1281C45.8107 37.1281 48.1305 36.5531 50.213 35.4531C52.1603 34.3673 53.7603 32.7528 54.8282 30.7963C55.9531 28.7217 56.5254 26.3928 56.4901 24.0333C56.5465 21.6522 55.9744 19.2982 54.8312 17.2083ZM43.4623 33.1527C41.6486 33.1527 39.8756 32.6152 38.3675 31.608C36.8594 30.6009 35.684 29.1695 34.9899 27.4948C34.2959 25.82 34.1143 23.9771 34.4681 22.1992C34.8219 20.4213 35.6953 18.7882 36.9778 17.5064C38.2603 16.2246 39.8944 15.3517 41.6733 14.998C43.4521 14.6444 45.296 14.8259 46.9717 15.5196C48.6473 16.2133 50.0796 17.388 51.0872 18.8953C52.0949 20.4025 52.6327 22.1746 52.6327 23.9873C52.6331 25.191 52.3962 26.383 51.9355 27.4952C51.4747 28.6074 50.7993 29.6179 49.9476 30.4691C49.096 31.3203 48.0849 31.9954 46.9721 32.4558C45.8593 32.9163 44.6667 33.1531 43.4623 33.1527Z"
          fill="#333333"
        />
        <Path
          d="M24.3666 17.357C23.2351 15.37 21.5898 13.7236 19.603 12.5903C17.6162 11.457 15.3611 10.8784 13.0738 10.9152C10.7447 10.8911 8.45081 11.4839 6.42529 12.6332C4.45291 13.7526 2.82067 15.385 1.70193 17.357C0.55319 19.3935 -0.0341171 21.6983 2.43634e-06 24.0359C2.43634e-06 24.3361 0.0150195 24.6433 0.0300365 24.9365V24.9515C0.0450535 25.2517 0.0740865 25.5288 0.104121 25.81V25.84C0.134155 26.1062 0.178205 26.3733 0.223256 26.6405C0.223256 26.6705 0.238273 26.6995 0.238273 26.7295C0.282323 26.9667 0.327374 27.2038 0.386441 27.4299C0.401458 27.504 0.416475 27.563 0.430491 27.6371C0.474541 27.8152 0.519592 27.9773 0.563642 28.1554C0.817403 29.0449 1.16054 29.9064 1.5878 30.7269L1.63185 30.7419C1.64687 30.7569 1.64687 30.7859 1.66189 30.8009C2.73714 32.7608 4.34834 34.3742 6.30716 35.4527C8.37649 36.5953 10.7101 37.174 13.0738 37.1306C15.4312 37.1681 17.7575 36.5897 19.8225 35.4527C20.3246 35.1664 20.8057 34.8447 21.2621 34.4901V34.5791C21.2499 34.8972 21.3044 35.2144 21.4219 35.5102C21.5395 35.8061 21.7176 36.0741 21.9449 36.2972C22.1703 36.5218 22.4392 36.698 22.7351 36.8152C23.031 36.9324 23.3477 36.9879 23.6658 36.9786C23.9843 36.9907 24.3018 36.9364 24.5982 36.8191C24.8945 36.7018 25.1631 36.524 25.3868 36.2972C25.6118 36.0724 25.7884 35.8041 25.9058 35.5087C26.0233 35.2132 26.079 34.8969 26.0696 34.5791V24.0359C26.1179 21.6965 25.5293 19.388 24.3666 17.357ZM13.0438 33.1573C11.2334 33.1545 9.46452 32.6155 7.96061 31.6082C6.45669 30.601 5.28528 29.1708 4.5944 27.4983C3.90352 25.8259 3.7242 23.9863 4.07908 22.212C4.43396 20.4377 5.30713 18.8084 6.58823 17.53C7.86933 16.2515 9.50086 15.3813 11.2766 15.0294C13.0524 14.6774 14.8927 14.8594 16.565 15.5525C18.2373 16.2456 19.6665 17.4185 20.672 18.9232C21.6775 20.4278 22.2142 22.1966 22.2142 24.0059C22.2137 25.2087 21.976 26.3996 21.5148 27.5106C21.0536 28.6216 20.3779 29.6309 19.5262 30.4807C18.6746 31.3306 17.6638 32.0044 16.5515 32.4637C15.4392 32.9229 14.2473 33.1586 13.0438 33.1573Z"
          fill="#333333"
        />
        <Path
          d="M47.0597 46.9907H45.9157V43.1947C45.9157 42.4841 45.7987 41.9597 45.5647 41.6217C45.3394 41.2837 45.0014 41.1147 44.5507 41.1147C44.0827 41.1147 43.6624 41.2837 43.2897 41.6217C42.9257 41.9511 42.6657 42.3801 42.5097 42.9087V46.9907H41.3657V43.1947C41.3657 42.4667 41.2531 41.9381 41.0277 41.6087C40.8024 41.2794 40.4644 41.1147 40.0137 41.1147C39.5544 41.1147 39.1384 41.2794 38.7657 41.6087C38.3931 41.9294 38.1287 42.3584 37.9727 42.8957V46.9907H36.8287V40.2047H37.8687V41.6607C38.1461 41.1581 38.5057 40.7724 38.9477 40.5037C39.3897 40.2264 39.8881 40.0877 40.4427 40.0877C41.0147 40.0877 41.4654 40.2437 41.7947 40.5557C42.1327 40.8591 42.3407 41.2534 42.4187 41.7387C43.0254 40.6381 43.8877 40.0877 45.0057 40.0877C45.3957 40.0877 45.7207 40.1614 45.9807 40.3087C46.2494 40.4474 46.4617 40.6467 46.6177 40.9067C46.7737 41.1581 46.8864 41.4571 46.9557 41.8037C47.0251 42.1504 47.0597 42.5274 47.0597 42.9347V46.9907ZM50.5805 47.1207C50.2598 47.1207 49.9608 47.0687 49.6835 46.9647C49.4062 46.8521 49.1635 46.7004 48.9555 46.5097C48.7562 46.3191 48.5958 46.0981 48.4745 45.8467C48.3618 45.5867 48.3055 45.3051 48.3055 45.0017C48.3055 44.6897 48.3748 44.4081 48.5135 44.1567C48.6522 43.8967 48.8472 43.6757 49.0985 43.4937C49.3585 43.3117 49.6618 43.1687 50.0085 43.0647C50.3638 42.9607 50.7495 42.9087 51.1655 42.9087C51.4948 42.9087 51.8285 42.9391 52.1665 42.9997C52.5045 43.0604 52.8035 43.1427 53.0635 43.2467V42.7007C53.0635 42.1461 52.9075 41.7127 52.5955 41.4007C52.2835 41.0801 51.8415 40.9197 51.2695 40.9197C50.5848 40.9197 49.8655 41.1841 49.1115 41.7127L48.7345 40.9717C49.6098 40.3824 50.4895 40.0877 51.3735 40.0877C52.2662 40.0877 52.9595 40.3261 53.4535 40.8027C53.9562 41.2794 54.2075 41.9511 54.2075 42.8177V45.5867C54.2075 45.8554 54.3288 45.9941 54.5715 46.0027V46.9907C54.4502 47.0081 54.3505 47.0211 54.2725 47.0297C54.1945 47.0384 54.1122 47.0427 54.0255 47.0427C53.8002 47.0427 53.6182 46.9777 53.4795 46.8477C53.3495 46.7091 53.2715 46.5444 53.2455 46.3537L53.2195 45.8727C52.9162 46.2801 52.5305 46.5921 52.0625 46.8087C51.6032 47.0167 51.1092 47.1207 50.5805 47.1207ZM50.8795 46.2627C51.2868 46.2627 51.6638 46.1891 52.0105 46.0417C52.3658 45.8857 52.6345 45.6821 52.8165 45.4307C52.9812 45.2661 53.0635 45.0971 53.0635 44.9237V43.9227C52.5088 43.7061 51.9325 43.5977 51.3345 43.5977C50.7625 43.5977 50.2945 43.7191 49.9305 43.9617C49.5752 44.2044 49.3975 44.5207 49.3975 44.9107C49.3975 45.1014 49.4322 45.2791 49.5015 45.4437C49.5795 45.6084 49.6835 45.7514 49.8135 45.8727C49.9522 45.9941 50.1125 46.0894 50.2945 46.1587C50.4765 46.2281 50.6715 46.2627 50.8795 46.2627ZM59.6247 41.2057C59.0527 41.2231 58.5457 41.3704 58.1037 41.6477C57.6704 41.9251 57.3627 42.3107 57.1807 42.8047V46.9907H56.0367V40.2047H57.1027V41.7777C57.3367 41.3097 57.6444 40.9327 58.0257 40.6467C58.4071 40.3521 58.8144 40.1874 59.2477 40.1527C59.3344 40.1527 59.4081 40.1527 59.4687 40.1527C59.5294 40.1527 59.5814 40.1571 59.6247 40.1657V41.2057ZM65.5434 46.9907L63.2034 43.6757L61.9034 44.8977V46.9907H60.7594V37.5007H61.9034V43.7407L65.3874 40.2177H66.6484L63.9444 43.0257L66.7784 46.9907H65.5434ZM70.4147 47.1207C69.9034 47.1207 69.4354 47.0297 69.0107 46.8477C68.5861 46.6571 68.2221 46.4014 67.9187 46.0807C67.6154 45.7601 67.3771 45.3874 67.2037 44.9627C67.0391 44.5294 66.9567 44.0744 66.9567 43.5977C66.9567 43.1211 67.0391 42.6704 67.2037 42.2457C67.3771 41.8211 67.6154 41.4484 67.9187 41.1277C68.2307 40.8071 68.5991 40.5557 69.0237 40.3737C69.4484 40.1831 69.9164 40.0877 70.4277 40.0877C70.9391 40.0877 71.4027 40.1831 71.8187 40.3737C72.2434 40.5644 72.6031 40.8201 72.8977 41.1407C73.1924 41.4527 73.4177 41.8211 73.5737 42.2457C73.7384 42.6617 73.8207 43.0951 73.8207 43.5457C73.8207 43.6411 73.8164 43.7277 73.8077 43.8057C73.8077 43.8837 73.8034 43.9444 73.7947 43.9877H68.1657C68.1917 44.3257 68.2697 44.6334 68.3997 44.9107C68.5297 45.1881 68.6987 45.4264 68.9067 45.6257C69.1147 45.8251 69.3487 45.9811 69.6087 46.0937C69.8774 46.2064 70.1591 46.2627 70.4537 46.2627C70.6617 46.2627 70.8654 46.2367 71.0647 46.1847C71.2641 46.1241 71.4504 46.0461 71.6237 45.9507C71.7971 45.8554 71.9487 45.7384 72.0787 45.5997C72.2174 45.4611 72.3214 45.3051 72.3907 45.1317L73.3787 45.4047C73.2661 45.6561 73.1101 45.8857 72.9107 46.0937C72.7201 46.3017 72.4947 46.4837 72.2347 46.6397C71.9834 46.7871 71.7017 46.9041 71.3897 46.9907C71.0777 47.0774 70.7527 47.1207 70.4147 47.1207ZM72.7417 43.1427C72.7157 42.8221 72.6334 42.5274 72.4947 42.2587C72.3647 41.9814 72.1957 41.7474 71.9877 41.5567C71.7884 41.3661 71.5544 41.2187 71.2857 41.1147C71.0171 41.0021 70.7311 40.9457 70.4277 40.9457C70.1244 40.9457 69.8384 41.0021 69.5697 41.1147C69.3011 41.2187 69.0627 41.3704 68.8547 41.5697C68.6554 41.7604 68.4907 41.9901 68.3607 42.2587C68.2394 42.5274 68.1657 42.8221 68.1397 43.1427H72.7417ZM78.5389 46.6527C78.4696 46.6874 78.3786 46.7307 78.2659 46.7827C78.1533 46.8261 78.0233 46.8737 77.8759 46.9257C77.7373 46.9691 77.5813 47.0037 77.4079 47.0297C77.2433 47.0644 77.0699 47.0817 76.8879 47.0817C76.4719 47.0817 76.1123 46.9691 75.8089 46.7437C75.5056 46.5097 75.3539 46.1501 75.3539 45.6647V41.1017H74.4309V40.2047H75.3539V37.9427H76.4979V40.2047H78.0189V41.1017H76.4979V45.3137C76.5153 45.5651 76.5976 45.7471 76.7449 45.8597C76.8923 45.9724 77.0656 46.0287 77.2649 46.0287C77.4903 46.0287 77.6939 45.9941 77.8759 45.9247C78.0666 45.8467 78.1966 45.7861 78.2659 45.7427L78.5389 46.6527ZM83.2522 47.1207C82.6889 47.1207 82.1906 46.9821 81.7572 46.7047C81.3326 46.4274 80.9946 46.0764 80.7432 45.6517V49.7597H79.5992V40.2047H80.6132V41.4787C80.8819 41.0627 81.2286 40.7291 81.6532 40.4777C82.0866 40.2177 82.5632 40.0877 83.0832 40.0877C83.5512 40.0877 83.9802 40.1831 84.3702 40.3737C84.7602 40.5644 85.0982 40.8244 85.3842 41.1537C85.6702 41.4744 85.8912 41.8471 86.0472 42.2717C86.2119 42.6964 86.2942 43.1384 86.2942 43.5977C86.2942 44.0831 86.2206 44.5424 86.0732 44.9757C85.9259 45.4004 85.7179 45.7731 85.4492 46.0937C85.1806 46.4057 84.8599 46.6571 84.4872 46.8477C84.1146 47.0297 83.7029 47.1207 83.2522 47.1207ZM82.9012 46.1327C83.2392 46.1327 83.5426 46.0634 83.8112 45.9247C84.0886 45.7774 84.3226 45.5867 84.5132 45.3527C84.7126 45.1101 84.8642 44.8371 84.9682 44.5337C85.0722 44.2304 85.1242 43.9184 85.1242 43.5977C85.1242 43.2597 85.0636 42.9391 84.9422 42.6357C84.8209 42.3237 84.6562 42.0551 84.4482 41.8297C84.2402 41.5957 83.9932 41.4137 83.7072 41.2837C83.4299 41.1451 83.1266 41.0757 82.7972 41.0757C82.5892 41.0757 82.3726 41.1191 82.1472 41.2057C81.9306 41.2837 81.7226 41.3921 81.5232 41.5307C81.3326 41.6607 81.1636 41.8211 81.0162 42.0117C80.8776 42.1937 80.7866 42.3887 80.7432 42.5967V44.5337C80.8386 44.7591 80.9599 44.9714 81.1072 45.1707C81.2546 45.3614 81.4236 45.5304 81.6142 45.6777C81.8049 45.8164 82.0086 45.9291 82.2252 46.0157C82.4419 46.0937 82.6672 46.1327 82.9012 46.1327ZM87.7248 37.5007H88.8688V45.2357C88.8688 45.4871 88.9338 45.6864 89.0638 45.8337C89.2025 45.9724 89.3932 46.0417 89.6358 46.0417C89.7312 46.0417 89.8438 46.0287 89.9738 46.0027C90.1038 45.9681 90.2252 45.9291 90.3378 45.8857L90.5198 46.8087C90.3292 46.8867 90.1038 46.9517 89.8438 47.0037C89.5838 47.0557 89.3542 47.0817 89.1548 47.0817C88.7128 47.0817 88.3618 46.9561 88.1018 46.7047C87.8505 46.4534 87.7248 46.1024 87.7248 45.6517V37.5007ZM93.1606 47.1207C92.8399 47.1207 92.5409 47.0687 92.2636 46.9647C91.9862 46.8521 91.7436 46.7004 91.5356 46.5097C91.3362 46.3191 91.1759 46.0981 91.0546 45.8467C90.9419 45.5867 90.8856 45.3051 90.8856 45.0017C90.8856 44.6897 90.9549 44.4081 91.0936 44.1567C91.2322 43.8967 91.4272 43.6757 91.6786 43.4937C91.9386 43.3117 92.2419 43.1687 92.5886 43.0647C92.9439 42.9607 93.3296 42.9087 93.7456 42.9087C94.0749 42.9087 94.4086 42.9391 94.7466 42.9997C95.0846 43.0604 95.3836 43.1427 95.6436 43.2467V42.7007C95.6436 42.1461 95.4876 41.7127 95.1756 41.4007C94.8636 41.0801 94.4216 40.9197 93.8496 40.9197C93.1649 40.9197 92.4456 41.1841 91.6916 41.7127L91.3146 40.9717C92.1899 40.3824 93.0696 40.0877 93.9536 40.0877C94.8462 40.0877 95.5396 40.3261 96.0336 40.8027C96.5362 41.2794 96.7876 41.9511 96.7876 42.8177V45.5867C96.7876 45.8554 96.9089 45.9941 97.1516 46.0027V46.9907C97.0302 47.0081 96.9306 47.0211 96.8526 47.0297C96.7746 47.0384 96.6922 47.0427 96.6056 47.0427C96.3802 47.0427 96.1982 46.9777 96.0596 46.8477C95.9296 46.7091 95.8516 46.5444 95.8256 46.3537L95.7996 45.8727C95.4962 46.2801 95.1106 46.5921 94.6426 46.8087C94.1832 47.0167 93.6892 47.1207 93.1606 47.1207ZM93.4596 46.2627C93.8669 46.2627 94.2439 46.1891 94.5906 46.0417C94.9459 45.8857 95.2146 45.6821 95.3966 45.4307C95.5612 45.2661 95.6436 45.0971 95.6436 44.9237V43.9227C95.0889 43.7061 94.5126 43.5977 93.9146 43.5977C93.3426 43.5977 92.8746 43.7191 92.5106 43.9617C92.1552 44.2044 91.9776 44.5207 91.9776 44.9107C91.9776 45.1014 92.0122 45.2791 92.0816 45.4437C92.1596 45.6084 92.2636 45.7514 92.3936 45.8727C92.5322 45.9941 92.6926 46.0894 92.8746 46.1587C93.0566 46.2281 93.2516 46.2627 93.4596 46.2627ZM98.1618 43.5847C98.1618 43.1081 98.2442 42.6574 98.4088 42.2327C98.5735 41.8081 98.8075 41.4397 99.1108 41.1277C99.4142 40.8071 99.7738 40.5557 100.19 40.3737C100.614 40.1831 101.087 40.0877 101.607 40.0877C102.283 40.0877 102.863 40.2394 103.349 40.5427C103.843 40.8374 104.215 41.2361 104.467 41.7387L103.349 42.0897C103.175 41.7691 102.933 41.5221 102.621 41.3487C102.309 41.1667 101.962 41.0757 101.581 41.0757C101.269 41.0757 100.974 41.1407 100.697 41.2707C100.419 41.3921 100.181 41.5654 99.9818 41.7907C99.7825 42.0161 99.6222 42.2804 99.5008 42.5837C99.3882 42.8871 99.3318 43.2207 99.3318 43.5847C99.3318 43.9401 99.3925 44.2737 99.5138 44.5857C99.6352 44.8977 99.7955 45.1707 99.9948 45.4047C100.203 45.6301 100.441 45.8077 100.71 45.9377C100.987 46.0677 101.282 46.1327 101.594 46.1327C101.793 46.1327 101.988 46.1067 102.179 46.0547C102.378 45.9941 102.556 45.9161 102.712 45.8207C102.876 45.7254 103.019 45.6171 103.141 45.4957C103.262 45.3657 103.349 45.2271 103.401 45.0797L104.519 45.4177C104.415 45.6691 104.267 45.8987 104.077 46.1067C103.895 46.3147 103.678 46.4924 103.427 46.6397C103.175 46.7871 102.894 46.9041 102.582 46.9907C102.278 47.0774 101.958 47.1207 101.62 47.1207C101.108 47.1207 100.64 47.0254 100.216 46.8347C99.7912 46.6441 99.4272 46.3884 99.1238 46.0677C98.8205 45.7471 98.5822 45.3744 98.4088 44.9497C98.2442 44.5164 98.1618 44.0614 98.1618 43.5847ZM108.755 47.1207C108.243 47.1207 107.775 47.0297 107.351 46.8477C106.926 46.6571 106.562 46.4014 106.259 46.0807C105.955 45.7601 105.717 45.3874 105.544 44.9627C105.379 44.5294 105.297 44.0744 105.297 43.5977C105.297 43.1211 105.379 42.6704 105.544 42.2457C105.717 41.8211 105.955 41.4484 106.259 41.1277C106.571 40.8071 106.939 40.5557 107.364 40.3737C107.788 40.1831 108.256 40.0877 108.768 40.0877C109.279 40.0877 109.743 40.1831 110.159 40.3737C110.583 40.5644 110.943 40.8201 111.238 41.1407C111.532 41.4527 111.758 41.8211 111.914 42.2457C112.078 42.6617 112.161 43.0951 112.161 43.5457C112.161 43.6411 112.156 43.7277 112.148 43.8057C112.148 43.8837 112.143 43.9444 112.135 43.9877H106.506C106.532 44.3257 106.61 44.6334 106.74 44.9107C106.87 45.1881 107.039 45.4264 107.247 45.6257C107.455 45.8251 107.689 45.9811 107.949 46.0937C108.217 46.2064 108.499 46.2627 108.794 46.2627C109.002 46.2627 109.205 46.2367 109.405 46.1847C109.604 46.1241 109.79 46.0461 109.964 45.9507C110.137 45.8554 110.289 45.7384 110.419 45.5997C110.557 45.4611 110.661 45.3051 110.731 45.1317L111.719 45.4047C111.606 45.6561 111.45 45.8857 111.251 46.0937C111.06 46.3017 110.835 46.4837 110.575 46.6397C110.323 46.7871 110.042 46.9041 109.73 46.9907C109.418 47.0774 109.093 47.1207 108.755 47.1207ZM111.082 43.1427C111.056 42.8221 110.973 42.5274 110.835 42.2587C110.705 41.9814 110.536 41.7474 110.328 41.5567C110.128 41.3661 109.894 41.2187 109.626 41.1147C109.357 41.0021 109.071 40.9457 108.768 40.9457C108.464 40.9457 108.178 41.0021 107.91 41.1147C107.641 41.2187 107.403 41.3704 107.195 41.5697C106.995 41.7604 106.831 41.9901 106.701 42.2587C106.579 42.5274 106.506 42.8221 106.48 43.1427H111.082Z"
          fill="#333333"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_18_209">
          <Rect width="119" height="51" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default BigLogo;
