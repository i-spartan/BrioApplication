import * as S from './SubscriptionForm.Styled';
import * as T from '../Text/TextStyles';
import { Button } from '../Button/Button';
import Input from '../Input/Input';

const SubscriptionForm = () => {
    return (
        <S.StyledSubscriptionForm>
            <div className="titles">
                <T.Text1 color="#f2be22" marginBottom={8}>
                    Contact US
                </T.Text1>
                <T.Title2 marginBottom={18}>
                    We are here for you <br/> Expect the vist for our expert soon
                </T.Title2>
            </div>
            <div className="form-outer">
                <div className="form">
                    <Input
                        label="Enter Name"
                        placeholder="Name"
                    // marginBottom={16}
                    />
                    <Input
                        label="Enter Phone Number"
                        placeholder="+91 - "
                    // marginBottom={16}
                    />
                    <Input
                        label="Enter Email Id"
                        placeholder="abcd@gmail.com "
                    // marginBottom={16}
                    />
                    <Input
                        label="Enter City"
                        placeholder="city"
                    // marginBottom={16}
                    />
                    <div>
                        <Button
                            title="Request Call Back"
                            color="#FDFDFD"
                            backgroundColor="#1A3E3E"
                        />
                    </div>
                </div>
                <div className="disclaimer">
                    <T.Text3>
                        Our representative will reach you as soon as possible.
                        {/* <T.StyledLink to="./" underline>
                            условиями обработки персональных данных
                        </T.StyledLink>{' '} */}
                        {/* и{' '} */}
                        {/* <T.StyledLink to="./" underline>
                            правилами рекламных рассылок
                        </T.StyledLink> */}
                    </T.Text3>
                </div>
            </div>
        </S.StyledSubscriptionForm>
    );
};

export default SubscriptionForm;
