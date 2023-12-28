import * as S from './BlogSection.Styled';
import ColoredSection from '../../Section/ColoredSection';
import TinySlider from 'tiny-slider-react';
import { Button } from '../../Button/Button';
import BlogPostCard, {
    BlogPostCardType,
} from '../../BlogPostCard/BlogPostCard';
import SectionHeader from '../../SectionHeader/SectionHeader';
import { Box } from '@mui/material';

type Props = {
    posts: BlogPostCardType[];
    tinySliderSettings: any;
    knowMore: () => void;
};

const BlogSection = ({ posts, tinySliderSettings, knowMore }: Props) => {
    return (
        <ColoredSection backgroundColor="#F3F5F4">
            <Box px={'15px'}>
                <S.BlogSectionStyled>
                    <SectionHeader
                        description="Our Elevators Equipped With"
                        title="Most Advanced and Safety Features"
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
                    <div className="button-outer" onClick={knowMore}>
                        <Button
                            title="Know More..."
                            color="#FDFDFD"
                            backgroundColor="#063245"
                        />
                    </div>
                </S.BlogSectionStyled>
            </Box>

        </ColoredSection>
    );
};

export default BlogSection;
