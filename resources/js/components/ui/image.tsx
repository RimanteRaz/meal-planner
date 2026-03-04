import React from "react";
import fallback from "/resources/images/fallback.svg"

interface ImageProps extends Omit<React.ComponentProps<'img'>, 'src'> {
  src?: string | null;
  className?: string;
}

export function Image ({src, className, ...props}: ImageProps) {
  const handleError: React.ReactEventHandler<HTMLImageElement> = (event) => {
    event.currentTarget.src = fallback

  }
  return <img src={src || fallback} className={className} onError={handleError} {...props}/>

}
