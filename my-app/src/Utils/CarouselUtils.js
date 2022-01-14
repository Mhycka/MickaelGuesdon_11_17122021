export default function CarouselUtils(x, range) {
    const topped = x % range;
    return topped < 0 ? topped + range : topped;
  }