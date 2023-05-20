import { useDispatch } from 'react-redux';
import { searchMovie } from '../redux/selectSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/bundle';

function MovieCard(props: any) {

    const dispatch = useDispatch()

    return <section>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={40}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            {props.movies.map((value: any) => {
                return <SwiperSlide key={value.id} onClick={() => dispatch(searchMovie({name: value.name || value.title}))}>
                    <img src={`https://image.tmdb.org/t/p/w300/${value?.poster_path}`} alt="movie-img" />
                    <h3>{value?.title || value?.name}</h3>
                </SwiperSlide>
            })}
        </Swiper>
    </section>
}

export default MovieCard