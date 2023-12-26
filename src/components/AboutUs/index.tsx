import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col w-full max-w-[400px] basis-[400px] py-8">
      <h1 className="text-4xl font-bold">关注推特<a href="https://twitter.com/ssktf1631641">面若桃花</a></h1>
      <p className="text-xs mt-2 text-gray-400">提前在TG群发开源脚本 <a href="https://t.me/jingetiemas">TG群</a></p>
      <div className="flex justify-center mb-2 w-[360px]">
        <Link
          href={`https://github.com/TheSkyl/serimint`}
          target="_blank"
          className="flex items-center justify-center"
        >
        </Link>
      </div>
      <Link
        href={`https://github.com/TheSkyl/serimint`}
        target="_blank"
        className="flex items-center justify-center mt-2"
      >
        <Image src="/icons/github.svg" width={24} height={24} alt="twitter" />
        <span className="underline ml-2">开源安全可直接下载代码</span>
      </Link>
    </div>
  );
};

export default AboutUs;