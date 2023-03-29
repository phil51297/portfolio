import React from 'react';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import '/src/background.css';

const Main = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div id='main'>
      <div className='w-full h-screen relative top-0 left-0'>
        <div className='max-w-[800px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='text-center sm:text-5xl text-4xl text-gray-100'>
            Bonjour et bienvenue! <br></br>
          </h1>
          <h1 className='text-center sm:text-5xl text-4xl font-bold text-gray-100 pt-6'>
            Je m'appelle Philippe Bonnafous
          </h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-100'>
            Je suis un
            <TypeAnimation
              sequence={[
                'Développeur Full Stack', // Types 'One'
                2000, // Waits 1s
                'Programmeur', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                'Passioné de technologie', // Deletes 'One' and types 'Two'
                2000, // Waits 2s
              ]}
              wrapper='div'
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
            />
          </h2>
          <div className='flex justify-between pt-8 max-w-[120px] w-full'>
            <a href='https://www.linkedin.com/in/philippe-bonnafous/'>
              <FaLinkedinIn className='cursor-pointer' size={45} />
            </a>
            <a href='https://github.com/phil51297'>
              <FaGithub className='cursor-pointer' size={45} />
            </a>
          </div>
        </div>
        <div id='tsparticles'>
          <Particles
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              autoPlay: true,
              background: {
                color: {
                  value: '#2295ec',
                },
              },
              backgroundMask: {
                composite: 'destination-out',
                cover: {
                  color: {
                    value: '#fff',
                  },
                  opacity: 1,
                },
                enable: false,
              },
              defaultThemes: {},
              delay: 0,
              fullScreen: {
                enable: false,
                zIndex: -1,
              },
              detectRetina: true,
              duration: 0,
              fpsLimit: 120,
              interactivity: {
                detectsOn: 'window',
                events: {
                  onClick: {
                    enable: false,
                    mode: [],
                  },
                  onDiv: {
                    selectors: [],
                    enable: false,
                    mode: [],
                    type: 'circle',
                  },
                  onHover: {
                    enable: true,
                    mode: 'slow',
                    parallax: {
                      enable: false,
                      force: 2,
                      smooth: 10,
                    },
                  },
                  resize: {
                    delay: 0.5,
                    enable: true,
                  },
                },
                modes: {
                  attract: {
                    distance: 200,
                    duration: 0.4,
                    easing: 'ease-out-quad',
                    factor: 1,
                    maxSpeed: 50,
                    speed: 1,
                  },
                  bounce: {
                    distance: 200,
                  },
                  bubble: {
                    distance: 200,
                    duration: 0.4,
                    mix: false,
                    divs: {
                      distance: 200,
                      duration: 0.4,
                      mix: false,
                      selectors: [],
                    },
                  },
                  connect: {
                    distance: 80,
                    links: {
                      opacity: 0.5,
                    },
                    radius: 60,
                  },
                  grab: {
                    distance: 100,
                    links: {
                      blink: false,
                      consent: false,
                      opacity: 1,
                    },
                  },
                  push: {
                    default: true,
                    groups: [],
                    quantity: 4,
                  },
                  remove: {
                    quantity: 2,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    easing: 'ease-out-quad',
                    divs: {
                      distance: 200,
                      duration: 0.4,
                      factor: 100,
                      speed: 1,
                      maxSpeed: 50,
                      easing: 'ease-out-quad',
                      selectors: [],
                    },
                  },
                  slow: {
                    factor: 3,
                    radius: 200,
                  },
                  trail: {
                    delay: 0.005,
                    pauseOnStop: true,
                    quantity: 5,
                    particles: {
                      color: {
                        value: '#ff0000',
                        animation: {
                          enable: true,
                          speed: 400,
                          sync: true,
                        },
                      },
                      collisions: {
                        enable: false,
                        bounce: {
                          horizontal: {
                            random: {},
                          },
                          vertical: {
                            random: {},
                          },
                        },
                        overlap: {},
                      },
                      links: {
                        enable: false,
                        shadow: {},
                        triangles: {},
                      },
                      move: {
                        outModes: {
                          default: 'destroy',
                        },
                        speed: 2,
                        angle: {},
                        attract: {
                          rotate: {},
                        },
                        distance: {},
                        gravity: {},
                        path: {
                          delay: {
                            random: {},
                          },
                        },
                        trail: {},
                      },
                      size: {
                        value: 5,
                        animation: {
                          enable: true,
                          speed: 5,
                          minimumValue: 1,
                          sync: true,
                          startValue: 'min',
                          destroy: 'max',
                        },
                        random: {},
                      },
                      bounce: {
                        horizontal: {
                          random: {},
                        },
                        vertical: {
                          random: {},
                        },
                      },
                      destroy: {
                        split: {
                          factor: {
                            random: {},
                          },
                          rate: {
                            random: {},
                          },
                        },
                      },
                      life: {
                        delay: {
                          random: {},
                        },
                        duration: {
                          random: {},
                        },
                      },
                      number: {
                        density: {},
                      },
                      opacity: {
                        animation: {},
                        random: {},
                      },
                      roll: {
                        darken: {},
                        enlighten: {},
                      },
                      rotate: {
                        animation: {},
                      },
                      shadow: {
                        offset: {},
                      },
                      shape: {},
                      stroke: {
                        color: {
                          value: '',
                          animation: {
                            count: 0,
                            enable: false,
                            offset: {
                              max: 0,
                              min: 0,
                            },
                            speed: 0,
                            decay: 0,
                            sync: false,
                          },
                        },
                      },
                      tilt: {
                        animation: {},
                      },
                      twinkle: {
                        lines: {},
                        particles: {},
                      },
                      wobble: {},
                    },
                  },
                  light: {
                    area: {
                      gradient: {
                        start: {
                          value: '#ffffff',
                        },
                        stop: {
                          value: '#000000',
                        },
                      },
                      radius: 1000,
                    },
                    shadow: {
                      color: {
                        value: '#000000',
                      },
                      length: 2000,
                    },
                  },
                },
              },
              manualParticles: [],
              particles: {
                bounce: {
                  horizontal: {
                    random: {
                      enable: false,
                      minimumValue: 0.1,
                    },
                    value: 1,
                  },
                  vertical: {
                    random: {
                      enable: false,
                      minimumValue: 0.1,
                    },
                    value: 1,
                  },
                },
                collisions: {
                  absorb: {
                    speed: 2,
                  },
                  bounce: {
                    horizontal: {
                      random: {
                        enable: false,
                        minimumValue: 0.1,
                      },
                      value: 1,
                    },
                    vertical: {
                      random: {
                        enable: false,
                        minimumValue: 0.1,
                      },
                      value: 1,
                    },
                  },
                  enable: true,
                  mode: 'bounce',
                  overlap: {
                    enable: true,
                    retries: 0,
                  },
                },
                color: {
                  value: '#ffffff',
                  animation: {
                    h: {
                      count: 0,
                      enable: true,
                      offset: 0,
                      speed: 50,
                      decay: 0,
                      sync: false,
                    },
                    s: {
                      count: 0,
                      enable: false,
                      offset: 0,
                      speed: 1,
                      decay: 0,
                      sync: true,
                    },
                    l: {
                      count: 0,
                      enable: false,
                      offset: 0,
                      speed: 1,
                      decay: 0,
                      sync: true,
                    },
                  },
                },
                groups: {},
                move: {
                  angle: {
                    offset: 0,
                    value: 90,
                  },
                  attract: {
                    distance: 200,
                    enable: false,
                    rotate: {
                      x: 3000,
                      y: 3000,
                    },
                  },
                  center: {
                    x: 50,
                    y: 50,
                    mode: 'percent',
                    radius: 0,
                  },
                  decay: 0,
                  distance: {},
                  direction: 'none',
                  drift: 0,
                  enable: true,
                  gravity: {
                    acceleration: 9.81,
                    enable: false,
                    inverse: false,
                    maxSpeed: 50,
                  },
                  path: {
                    clamp: true,
                    delay: {
                      random: {
                        enable: false,
                        minimumValue: 0,
                      },
                      value: 0,
                    },
                    enable: false,
                    options: {},
                  },
                  outModes: {
                    default: 'out',
                    bottom: 'out',
                    left: 'out',
                    right: 'out',
                    top: 'out',
                  },
                  random: false,
                  size: false,
                  speed: 2,
                  spin: {
                    acceleration: 0,
                    enable: false,
                  },
                  straight: false,
                  trail: {
                    enable: false,
                    length: 10,
                    fill: {},
                  },
                  vibrate: false,
                  warp: false,
                },
                number: {
                  density: {
                    enable: true,
                    width: 1920,
                    height: 1080,
                  },
                  limit: 0,
                  value: 100,
                },
                opacity: {
                  random: {
                    enable: true,
                    minimumValue: 0.3,
                  },
                  value: {
                    min: 0.3,
                    max: 0.8,
                  },
                  animation: {
                    count: 0,
                    enable: true,
                    speed: 0.5,
                    decay: 0,
                    sync: false,
                    destroy: 'none',
                    startValue: 'random',
                    minimumValue: 0.3,
                  },
                },
                reduceDuplicates: false,
                shadow: {
                  blur: 0,
                  color: {
                    value: '#000',
                  },
                  enable: false,
                  offset: {
                    x: 0,
                    y: 0,
                  },
                },
                shape: {
                  options: {},
                  type: 'circle',
                },
                size: {
                  random: {
                    enable: true,
                    minimumValue: 1,
                  },
                  value: {
                    min: 1,
                    max: 3,
                  },
                  animation: {
                    count: 0,
                    enable: true,
                    speed: 3,
                    decay: 0,
                    sync: false,
                    destroy: 'none',
                    startValue: 'random',
                    minimumValue: 1,
                  },
                },
                stroke: {
                  width: 0,
                  color: {
                    value: '',
                    animation: {
                      h: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 0,
                        decay: 0,
                        sync: false,
                      },
                      s: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 1,
                        decay: 0,
                        sync: true,
                      },
                      l: {
                        count: 0,
                        enable: false,
                        offset: 0,
                        speed: 1,
                        decay: 0,
                        sync: true,
                      },
                    },
                  },
                },
                zIndex: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                  opacityRate: 1,
                  sizeRate: 1,
                  velocityRate: 1,
                },
                life: {
                  count: 0,
                  delay: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 0,
                    sync: false,
                  },
                  duration: {
                    random: {
                      enable: false,
                      minimumValue: 0.0001,
                    },
                    value: 0,
                    sync: false,
                  },
                },
                rotate: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                  animation: {
                    enable: false,
                    speed: 0,
                    decay: 0,
                    sync: false,
                  },
                  direction: 'clockwise',
                  path: false,
                },
                destroy: {
                  bounds: {},
                  mode: 'none',
                  split: {
                    count: 1,
                    factor: {
                      random: {
                        enable: false,
                        minimumValue: 0,
                      },
                      value: 3,
                    },
                    rate: {
                      random: {
                        enable: false,
                        minimumValue: 0,
                      },
                      value: {
                        min: 4,
                        max: 9,
                      },
                    },
                    sizeOffset: true,
                    particles: {},
                  },
                },
                roll: {
                  darken: {
                    enable: false,
                    value: 0,
                  },
                  enable: false,
                  enlighten: {
                    enable: false,
                    value: 0,
                  },
                  mode: 'vertical',
                  speed: 25,
                },
                tilt: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                  animation: {
                    enable: false,
                    speed: 0,
                    decay: 0,
                    sync: false,
                  },
                  direction: 'clockwise',
                  enable: false,
                },
                twinkle: {
                  lines: {
                    enable: false,
                    frequency: 0.05,
                    opacity: 1,
                  },
                  particles: {
                    enable: false,
                    frequency: 0.05,
                    opacity: 1,
                  },
                },
                wobble: {
                  distance: 5,
                  enable: false,
                  speed: {
                    angle: 50,
                    move: 10,
                  },
                },
                orbit: {
                  animation: {
                    count: 0,
                    enable: false,
                    speed: 1,
                    decay: 0,
                    sync: false,
                  },
                  enable: false,
                  opacity: 1,
                  rotation: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 45,
                  },
                  width: 1,
                },
                links: {
                  blink: false,
                  color: {
                    value: 'random',
                  },
                  consent: false,
                  distance: 100,
                  enable: true,
                  frequency: 1,
                  opacity: 1,
                  shadow: {
                    blur: 5,
                    color: {
                      value: '#000',
                    },
                    enable: false,
                  },
                  triangles: {
                    enable: false,
                    frequency: 1,
                  },
                  width: 1,
                  warp: false,
                },
                repulse: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 0,
                  enabled: false,
                  distance: 1,
                  duration: 1,
                  factor: 1,
                  speed: 1,
                },
              },
              pauseOnBlur: true,
              pauseOnOutsideViewport: true,
              responsive: [],
              smooth: false,
              style: {},
              themes: [],
              zLayers: 100,
              emitters: [],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
