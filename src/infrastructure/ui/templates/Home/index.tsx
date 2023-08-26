// import { signIn, useSession } from 'next-auth/react';
import { FunctionComponent } from 'react';
import { InfoInput } from '~/domain/entities';

type HomeTemplateProps = {
  data?: Array<InfoInput>;
};

export const HomeTemplate: FunctionComponent<HomeTemplateProps> = () => {
  // const { loggedUser } = useContext(UserInfoContext);

  return (
    <div className="px-8">
      <main className="mainBase">
        <h2>Information:</h2>
        <h4 className="">
          - Go to de &apos;Track&apos; section to start recording your daily data.
          <p>
            - In history you will see your weight information based on the input you provided in the &apos;Track&apos; section.
          </p>
          <p>
            - The type of information you will get will be Body Fat Percentages, Body Fat Mass, Lean Body Mass, Body Mass Index
            and Body Fat Percentages using Body Mass Index.
          </p>
          <p>- The medition used will be the metrics system.</p>
          <h2 className="mt-2">Consideration:</h2>
          <div className="flex flex-row gap-2">
            <div>
              <p>+ Body Mass Index: (over age 20)</p>
              <div className="ml-5">
                <p>- Severe Thinness &lt; 16</p>
                <p>- Moderate Thinness 16 - 17</p>
                <p>- Mild Thinness 17 - 18.5</p>
                <p>- Normal 18.5 - 25</p>
                <p>- Overweight 25 - 30</p>
                <p>- Obese Class I 30 - 35</p>
                <p>- Obese Class II 35 - 40</p>
                <p>- Obese Class III &gt; 40</p>
              </div>
            </div>
            <div className="ml-10">
              <p>+ Body Fat Percentages:</p>
              <div className="ml-5">
                <p>- Essential fat Female: 10-13% / Male: 2-5% </p>
                <p>- Athletes Female: 14-20% / Male: 6-13% </p>
                <p>- Fitness Female: 21-24% / Male: 14-17% </p>
                <p>- Average Female: 25-31% / Male: 18-24% </p>
                <p>- Obese Female: 32+% / Male: 25+% </p>
              </div>
            </div>
          </div>
          {/* <div className="login"> */}
          <p>{/* {loggedUser?.attributes.given_name} {loggedUser?.attributes.family_name} */}</p>
          {/* </div> */}
        </h4>
      </main>
    </div>
  );
};
