import * as S from './BlogSection.Styled';
import ColoredSection from '../../Section/ColoredSection';
import TinySlider from 'tiny-slider-react';
import { Button } from '../../Button/Button';
import BlogPostCard, {
    BlogPostCardType,
} from '../../BlogPostCard/BlogPostCard';
import SectionHeader from '../../SectionHeader/SectionHeader';

type Props = {
    posts: BlogPostCardType[];
    tinySliderSettings: any;
};

const BlogSection = ({ posts, tinySliderSettings }: Props) => {
    return (
        <ColoredSection backgroundColor="#F3F5F4">
            <S.BlogSectionStyled>
                <SectionHeader
                    description="Eligance and Style"
                    title="Eligance and Style"
                />
                <div className="posts">
                    {posts.map(({ ...props }, index) => (
                        <BlogPostCard key={index} {...props} />
                    ))}
                </div>
                <div className="slider">
                    <TinySlider settings={tinySliderSettings}>
                        {posts.map(({ ...props }, index) => (
                            <BlogPostCard key={index} {...props} />
                        ))}
                    </TinySlider>
                </div>
                <div className="button-outer">
                    <Button
                        title="Другие материалы"
                        color="#FDFDFD"
                        backgroundColor="#063245"
                    />
                </div>
            </S.BlogSectionStyled>
        </ColoredSection>
    );
};

export default BlogSection;
