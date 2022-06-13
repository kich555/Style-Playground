import React, { Children, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

function Carousel({ children }) {
  const containerRef = useRef();
  const intervalRef = useRef(null);
  const [currentIdx, setCurrentIdx] = useState(1);
  const [translateX, setTranslateX] = useState(0);

  // This is for handle slide img

  const actionHandler = useCallback(
    mode => {
      containerRef.current.style.transitionDuration = '400ms';
      if (mode === 'prev') {
        if (currentIdx <= 1) {
          setTranslateX(0);
          setCurrentIdx(children.length);
        } else {
          setTranslateX(containerRef.current.clientWidth * (currentIdx - 1));
          setCurrentIdx(prev => {
            let idx = prev;
            return --idx;
          });
        }
      }
      if (mode === 'next') {
        if (currentIdx >= children.length) {
          setTranslateX(containerRef.current.clientWidth * (currentIdx.length + 1));
          setCurrentIdx(1);
        } else {
          setTranslateX(containerRef.current.clientWidth * (currentIdx + 1));
          setCurrentIdx(prev => {
            let idx = prev;
            return ++idx;
          });
        }
      }
    },
    [currentIdx, children],
  );

  // This is for smooth slider effect

  useEffect(() => {
    const transitionEnd = () => {
      if (currentIdx <= 1) {
        containerRef.current.style.transitionDuration = '0ms';
        setTranslateX(containerRef.current.clientWidth * currentIdx);
      }

      if (currentIdx >= children.length) {
        containerRef.current.style.transitionDuration = '0ms';
        setTranslateX(containerRef.current.clientWidth * children.length);
      }
    };

    document.addEventListener('transitionend', transitionEnd);

    return () => {
      document.removeEventListener('transitionend', transitionEnd);
    };
  }, [currentIdx]);

  // This is for auto play

  //   useEffect(() => {
  //     if (intervalRef.current) {
  //       clearInterval(intervalRef.current);
  //     }
  //     intervalRef.current = setInterval(() => {
  //       actionHandler('next');
  //     }, 1000);

  //     return () => {
  //       if (intervalRef.current) {
  //         clearInterval(intervalRef.current);
  //       }
  //     };
  //   }, [actionHandler]);

  // This is for Slider items

  const slides = useMemo(() => {
    if (children.length > 1) {
      const items = Children.map(children, (child, idx) => (
        <li className="carousel-list max-width max-height" key={child.id}>
          {child}
        </li>
      ));

      return [
        <li className="carousel-list max-width max-height" key={children.length + 1}>
          {children[children.length - 1]}
        </li>,
        ...items,
        <li className="carousel-list max-width max-height" key={children.length + 2}>
          {children[0]}
        </li>,
      ];
    }

    return <li className="carousel-list max-width max-height">{children[0]}</li>;
  }, [children]);

  useLayoutEffect(() => {
    setTranslateX(containerRef.current.clientWidth * currentIdx);
  }, []);

  return (
    <section className="carousel row relative overflow-hidden">
      <ul className="container row max-width max-height" ref={containerRef} style={{ transform: `translate3d(${-translateX}px, 0, 0)` }}>
        {slides}
      </ul>
      <button onClick={() => actionHandler('prev')} className="carousel-btn btn-left background-white primary link modal-zindex" type="button">
        left
      </button>
      <button onClick={() => actionHandler('next')} className="carousel-btn btn-right background-white primary link modal-zindex" type="button">
        right
      </button>
    </section>
  );
}

export default Carousel;
