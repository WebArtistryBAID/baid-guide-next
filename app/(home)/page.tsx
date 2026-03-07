import { FaCalendar, FaFile, FaList, FaSchool } from 'react-icons/fa'
import { Card, Cards } from 'fumadocs-ui/components/card'
import { Callout } from 'fumadocs-ui/components/callout'

export default function HomePage() {
    return (
        <div className="w-screen overflow-x-hidden">
            <section
                className="relative w-screen bg-cover bg-center flex flex-col items-center"
                style={{ backgroundImage: 'url(/img/home.webp)' }}>

                <div className="absolute bottom-24 sm:bottom-48 text-center">
                    <div className="bg-red-900 rounded-full inline-block p-5 mx-3 lg:p-8 lg:mx-5 mb-3 text-white">
                        <h1 className="text-2xl lg:text-3xl font-header font-bold">The BAID Survival Guide</h1>
                    </div>
                    <p className="text-white">Updated for Spring 2026—welcoming new students!</p>
                </div>

                <div className="h-[28rem] md:h-[40rem]"/>
            </section>

            <section className="relative w-screen -mt-12 mb-16 md:-mt-40">
                <div style={{ maxWidth: '77rem' }} className="mx-auto px-6">
                    <div
                        className="rounded-3xl bg-white px-5 py-10 shadow-lg md:px-8 md:py-12">
                        <Cards className="grid-cols-4">
                            <Card icon={<FaCalendar/>} href="/docs/freshmen-timeline/overview"
                                  title="欢迎新同学!">
                                在国际部，时间过得比想象中快很多。掌握好节奏，你会发现，这一年远比想象中更充实。
                            </Card>

                            <Card icon={<FaSchool/>} href="/docs/college-application/overview" title="了解大学申请制">
                                除了享受青葱岁月之外，作为学生，我们的每个阶段都有一个目标。到了国际部，我们需要做什么呢?
                            </Card>

                            <Card icon={<FaFile/>} href="/docs/procedures/course-selection" title="办理各类手续">
                                所有有关订购成绩单、选课、请假、开设社团等各类手续的办理流程。
                            </Card>

                            <Card icon={<FaList/>} href="/docs/basic-information/overview" title="获取学校基本信息">
                                集中了解北京中学国际部的基础信息，包括学校概况、作息时间、课程设置等。
                            </Card>
                        </Cards>
                    </div>
                </div>
            </section>

            <section style={{ maxWidth: '77rem' }} className="mx-auto px-6 mb-16">
                <h2 className="text-3xl mb-3">注意事项</h2>

                <Cards className="grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col">
                        <Callout type="warning">
                            <p>请注意，本站所有内容均属<strong>学生维护</strong>，根据 2025 - 2026 学年情况编写，
                                <strong>其内容未受学校确认</strong>。本网站不是官方文档，内容仅供参考。具体情况请咨询你的班主任、导师或相关负责人。
                            </p>
                        </Callout>

                        <Callout type="idea">
                            本文档中的提示部分属于经验分享，仅供参考。每个人的情况不同，请根据自己的实际情况做出选择。
                        </Callout>
                    </div>

                    <div className="flex flex-col">
                        <Callout>
                            <p className="mb-1">本文档只包含北京中学国际部的信息。本文并非为北中外籍人员子女学校
                                (International School of Beijing Academy) 编写。
                                高中项目包含八年级 (1.5)、九年级 (0.5、1 + 3)、十年级、十一年级和十二年级。</p>
                            <p className="mb-1">由于北京中学国际部招生方式多样，其年级划分与传统高中不同。本文档遵循以下划分:</p>
                            <ul className="list-disc list-inside">
                                <li><strong>第一年</strong>指九年级起点或 1.5 项目学生的九年级，十年级起点或 0.5
                                    项目学生的十年级。
                                </li>
                                <li><strong>第二年</strong>指九年级起点或 1.5 项目学生学生的十年级和十一年级，十年级起点或
                                    0.5 项目学生的十一年级。
                                </li>
                                <li><strong>第三年</strong>指十二年级。</li>
                                <li><strong>0.5 项目学生</strong>指从九年级第二学期入学的学生。</li>
                                <li><strong>1.5 项目学生</strong>指从八年级第二学期入学的学生。</li>
                            </ul>
                        </Callout>
                    </div>
                </Cards>
            </section>

            <section style={{ maxWidth: '77rem' }} className="mx-auto px-6 mb-16">
                <h2 className="text-3xl mb-5">常用链接</h2>

                <Cards className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <Card href="/docs/procedures/transcript" title="申请成绩单和在读证明"/>
                    <Card href="/docs/procedures/course-selection" title="选课"/>
                    <Card href="/docs/procedures/self-study" title="必修课程申请自修"/>
                    <Card href="/docs/basic-information/grades" title="成绩和 GPA"/>
                    <Card href="/docs/basic-information/courses" title="课程"/>
                    <Card href="/docs/college-application/standardized-testing" title="标准化考试"/>
                    <Card href="/docs/college-application/extracurricular-activities" title="课外活动"/>
                    <Card href="/docs/freshmen-timeline/entry-exam" title="开学考试"/>
                    <Card href="/docs/freshmen-timeline/military-training" title="军训"/>
                </Cards>
            </section>
        </div>
    )
}
